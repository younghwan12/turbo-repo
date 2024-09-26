// import { Middleware, MiddlewareAPI, isRejectedWithValue } from "@reduxjs/toolkit";
// import { setError } from "../errorSlice";
// interface RejectedActionPayload {
//     status: number;
//     data: {
//         code: string;
//         data?: string;
//         message: string;
//         timestamp: string;
//     };
// }

// export const rtkErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
//     if (isRejectedWithValue(action)) {
//         const payload = action.payload as RejectedActionPayload;
//         if (window !== undefined && payload) {
//             if (payload.status === 404) {
//                 return;
//             }
//             api.dispatch(
//                 setError({
//                     errorCode: payload.data.code,
//                     errorMessage: payload.data.message,
//                 })
//             );
//         }
//     }
//     return next(action);
// };

// export default {};
