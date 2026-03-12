export interface JobDetail {
    title: string;
    location: string;
    amount: number;
    time: string;
    distance: number;
    about: string;
    tasksIncluded: string[];
    addedServices: string[];
    addedServicesQuantity: number;
    customerName: string;
    customerPhone: number;
    instructions: string;
    mainItemPrice: number;
    additionalItemsPrice: number;
    taxes: number;
    totalEarnings: number;
}