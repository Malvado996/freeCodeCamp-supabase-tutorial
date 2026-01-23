import supabase from "./supabase-client"
import { useEffect, useState } from 'react'

function Dashboard() {

    const [metrics, setMetrics] = useState([]);

    async function fetchMetrics() {

        try {
            const { data, error } = await supabase
                .from('sales_deals')
                .select(
                    `
            name,
            value.sum()
            `,
                )
            if (error) {
                throw error;
            }
            console.log(data);
            setMetrics(data);
        } catch (error) {
            console.error('Data fetching error: ', error)
        }
    }

    useEffect(() => {
        fetchMetrics()
    }, []);


    return (
        <div className="dashboard-wrapper">
            <div className="chart-container">
                <h2>Total Sales This Quarter ($)</h2>
            </div>
        </div>
    )
}

export default Dashboard

// const response = await supabase
//             .from('sales_deals')
//             .select(
//                 `
//                         name,
//                         value
//                         `,
//             )
//             .order('value', { ascending: false })
//             .limit(1);