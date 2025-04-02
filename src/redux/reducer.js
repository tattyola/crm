const initialState = {
    clients: [
        {
            id: '1',
            name: 'Alice',
            surname: 'Rich',
            address: 'New York',
            phone: '+16667778899',
            created: '03.18.2025',
        },
        {
            id: '2',
            name: 'Alex',
            surname: 'Martin',
            address: 'Los Angeles',
            phone: '+16667778800',
            created: '03.19.2025',
        },
    ],
    services: [
        {
            id: '1',
            name: 'Legal Document Translation',
            employee: 'Alexander',
            price: '1000',
            cost: '100',
        },
        {
            id: '2',
            name: 'Consultation',
            employee: 'Alexander',
            price: '3000',
            cost: '300',
        },
        {
            id: '3',
            name: 'Notarization Services',
            employee: 'Alexander',
            price: '3000',
            cost: '300',
        },
        {
            id: '4',
            name: 'Immigration Services',
            employee: 'Alexander',
            price: '3000',
            cost: '300',
        },
        {
            id: '5',
            name: 'Business Services',
            employee: 'Alexander',
            price: '3000',
            cost: '300',
        },
        {
            id: '6',
            name: 'Educational Services',
            employee: 'Alexander',
            price: '3000',
            cost: '300',
        },
    ],
    orders: [
        {
            id: '1',
            name: 'Tatty',
            service: 'Translation',
            price: 1000,
            payments: '500',
            debt: '500',
            createdAt: '03.18.2025',
            status: 'In Progress',
            dates: '04.18.2025',
        },
        {
            id: '2',
            name: 'Dreyz',
            service: 'Translation',
            price: 800,
            payments: '400',
            debt: '400',
            createdAt: '03.18.2025',
            status: 'To do',
            dates: '04.18.2025',
        }
    ],
    // jobs: [],
    // employees: [],
    // results: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'CREATE_NEW_CLIENT':
            return {
                ...state,
                clients: [...state.clients, action.payload]
            };
        case 'DELETE_CLIENT':
            return {
                ...state,
                clients: state.clients.filter(client => client.id !== action.payload)
            };
        case 'UPDATE_CLIENT':
            return {
                ...state,
                clients: state.clients.map(client =>
                    client.id === action.payload.id
                        ? { ...client, ...action.payload }
                        : client)
            };

        case 'CREATE_NEW_SERVICE':
            return {
                ...state, services: [...state.services, action.payload]
            };
        case 'UPDATE_SERVICE':
            return {
                ...state,
                services: state.services.map(service =>
                    service.id === action.payload.id
                        ? { ...service, ...action.payload }
                        : service)
            };
        case 'DELETE_SERVICE':
            return {
                ...state,
                services: state.services.filter(service => service.id !== action.payload)
            };

        case 'CREATE_NEW_ORDER':
            return {
                ...state,
                orders: [...state.orders, action.payload]
            };
        case 'UPDATE_ORDER':
            return {
                ...state,
                orders: state.orders.map(order =>
                    order.id === action.payload.id
                        ? { ...order, ...action.payload }
                        : order)
            };
        case 'DELETE_ORDER':
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.payload)
            };

        default:
            return state;
    }
}

export default reducer;
