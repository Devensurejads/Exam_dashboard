import axios from 'axios';
import { API_URL } from "../config/config";

// Token refresh function
const token = async (): Promise<string | null> => {
    try {
        const response = await axios.post(
            `${API_URL}/api/v1/auth/login`,
            {
                username: "staff2",
                password: "test123#",
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NTMxMTg0MjAsImlhdCI6MTc1MzAzMjAyMCwic3ViIjo1LCJ1c2VybmFtZSI6InN0YWZmMiIsInJvbGUiOiJmYWN1bHR5In0.0PviDNINOZE4n37TGWFKgP4wrdNF03BuRV3XxcsRAlw"
                },
            }
        );

        console.log("Login success:", response.data);
        return response.data;

    } catch (err: any) {
        console.error("Failed to login:", err.response?.data || err.message);
        return null;
    }
};


// insertData with retry on 403
export const insertData = async (
    endpoint: string,
    data: any,
    flag: boolean,
    navigate?: (path: string) => void,
    formData?: boolean,
): Promise<any> => {
    const makeRequest = async (token?: string) => {

        const headers: Record<string, string> = {
            ...(formData
                ? { "Content-Type": "multipart/form-data" }
                : { "Content-Type": "application/json" }),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };
        return await axios.post(`${API_URL}/${endpoint}`, data, { headers });
    };

    try {
        const token = flag ? localStorage.getItem('token') : null;
        const response = await makeRequest(token || undefined);
        return response.data;

    } catch (error: any) {
        console.log('error: ', error);

        if (flag && error.response?.status === 403) {
            const newToken = await token();
            console.log('newToken: ', newToken);

            if (newToken) {
                try {
                    const retryResponse = await makeRequest(newToken);
                    return retryResponse.data;
                } catch (retryError) {
                    console.error("Retry failed after refreshing token:", retryError);
                    throw retryError;
                }
            } else {
                if (navigate) navigate('/');
                throw new Error("Session expired. Please login again.");
            }
        }

        throw error;
    }
};

// getData with retry on 403
export const getData = async (
    endpoint: string,
    flag: boolean,
    navigate?: (path: string) => void
): Promise<any> => {
    const makeRequest = async (token?: string) => {
        const headers: any = {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
        };

        return await axios.get(`${API_URL}/${endpoint}`, { headers });
    };

    try {
        const token = flag ? localStorage.getItem('token') : null;
        const response = await makeRequest(token || undefined);
        return response.data;

    } catch (error: any) {
        console.log('error: ', error);

        if (flag && error.response?.status === 403) {
            const newToken = await token();
            console.log('newToken: ', newToken);

            if (newToken) {
                try {
                    const retryResponse = await makeRequest(newToken);
                    return retryResponse.data;
                } catch (retryError) {
                    console.error("Retry failed after refreshing token:", retryError);
                    throw retryError;
                }
            } else {
                if (navigate) navigate('/');
                throw new Error("Session expired. Please login again.");
            }
        }

        throw error;
    }
};

export const deleteData = async (
    endpoint: string,
    flag: boolean,
    navigate?: (path: string) => void
): Promise<any> => {
    const makeRequest = async (token?: string) => {
        const headers: any = {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` }),
        };

        return await axios.delete(`${API_URL}/${endpoint}`, { headers });
    };

    try {
        const token = flag ? localStorage.getItem('token') : null;
        const response = await makeRequest(token || undefined);
        return response.data;

    } catch (error: any) {
        console.log('error: ', error);

        if (flag && error.response?.status === 403) {
            const newToken = await token();
            console.log('newToken: ', newToken);

            if (newToken) {
                try {
                    const retryResponse = await makeRequest(newToken);
                    return retryResponse.data;
                } catch (retryError) {
                    console.error("Retry failed after refreshing token:", retryError);
                    throw retryError;
                }
            } else {
                if (navigate) navigate('/');
                throw new Error("Session expired. Please login again.");
            }
        }

        throw error;
    }
};

export const putData = async (
    endpoint: string,
    data: any,
    flag: boolean,
    navigate?: (path: string) => void,
    formData?: boolean
): Promise<any> => {
    const makeRequest = async (token?: string) => {
        const headers: Record<string, string> = {
            ...(formData
                ? { "Content-Type": "multipart/form-data" }
                : { "Content-Type": "application/json" }),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };

        return await axios.put(`${API_URL}/${endpoint}`, data, { headers });
    };

    try {
        const token = flag ? localStorage.getItem('token') : null;
        const response = await makeRequest(token || undefined);
        return response.data;

    } catch (error: any) {
        console.log('error: ', error);

        if (flag && error.response?.status === 403) {
            const newToken = await token();
            console.log('newToken: ', newToken);

            if (newToken) {
                try {
                    const retryResponse = await makeRequest(newToken);
                    return retryResponse.data;
                } catch (retryError) {
                    console.error("Retry failed after refreshing token:", retryError);
                    throw retryError;
                }
            } else {
                if (navigate) navigate('/');
                throw new Error("Session expired. Please login again.");
            }
        }

        throw error;
    }
};

