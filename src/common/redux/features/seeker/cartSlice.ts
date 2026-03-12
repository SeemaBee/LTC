import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartService = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  providerId?: string;
  category?: string;
  meta?: Record<string, any>;
};

type CartState = {
  items: Record<string, CartService>;
  totalItems: number;
  subtotal: number;
  discount: number;
  tax: number;
  totalAmount: number;
};

const initialState: CartState = {
  items: {},
  totalItems: 0,
  subtotal: 0,
  discount: 0,
  tax: 0,
  totalAmount: 0,
};

const calculateTotals = (state: CartState) => {
  let subtotal = 0;
  let totalItems = 0;

  Object.values(state.items).forEach(item => {
    subtotal += item.price * (item.quantity ?? 1);
    totalItems += item.quantity ?? 1;
  });

  state.subtotal = subtotal;
  state.totalItems = totalItems;
  state.totalAmount = subtotal + state.tax - state.discount;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addService: (state, action: PayloadAction<CartService>) => {
      const service = action.payload;

      if (state.items[service.id]) {
        state.items[service.id].quantity =
          (state.items[service.id].quantity ?? 1) + 1;
      } else {
        state.items[service.id] = {
          ...service,
          quantity: service.quantity ?? 1,
        };
      }

      calculateTotals(state);
    },

    removeService: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
      calculateTotals(state);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items[action.payload];
      if (item) item.quantity! += 1;
      calculateTotals(state);
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items[action.payload];

      if (!item) return;

      if (item.quantity! > 1) {
        item.quantity! -= 1;
      } else {
        delete state.items[action.payload];
      }

      calculateTotals(state);
    },

    clearCart: state => {
      state.items = {};
      state.totalItems = 0;
      state.subtotal = 0;
      state.totalAmount = 0;
      state.discount = 0;
      state.tax = 0;
    },

    applyDiscount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
      calculateTotals(state);
    },

    applyTax: (state, action: PayloadAction<number>) => {
      state.tax = action.payload;
      calculateTotals(state);
    },
  },
});

export const {
  addService,
  removeService,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  applyDiscount,
  applyTax,
} = cartSlice.actions;

export default cartSlice.reducer;
