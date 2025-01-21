/* eslint-disable react/prop-types */
const Data = [
    {
        id:"cecd4af0-f484-4980-b554-d25951d9a66b",
        name: "Nguyen Van A",
        email: "nguyenvana@example.com",
        job: "Software Engineer",
        rate: 4.8,
        isActive: true
    },
    {
        id:"e61c37ab-967e-4005-aa7b-dff336c0b61a",
        name: "Tran Thi B",
        email: "tranthib@example.com",
        job: "Project Manager",
        rate: 4.5,
        isActive: false
    },
    {
        id:"69733d72-e1a1-4024-8449-80c668b36552",
        name: "Le Van C",
        email: "levanc@example.com",
        job: "UX Designer",
        rate: 4.7,
        isActive: true
    },
    {
        id:"db80b3f1-5275-48e6-bbd5-f0ce8e3468da",
        name: "Pham Thi D",
        email: "phamthid@example.com",
        job: "Data Analyst",
        rate: 4.9,
        isActive: true
    },
    {
        id:"7270e720-1227-4522-b02d-012887f69614",
        name: "Hoang Van E",
        email: "hoangvane@example.com",
        job: "DevOps Engineer",
        rate: 4.6,
        isActive: false
    }
]
const TabList = ({handleOpen}) => {
    return (
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Rate</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody className="hover">
                    {/* row 1 */}
                    {Data.map((data, id) => (
                        <tr key={id}>
                            <th>{id + 1}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.job}</td>
                            <td>{data.rate}</td>
                            <td>
                                <button className={`btn rounded-full w-20 ${data.isActive ? `btn-primary` : `btn-outline btn-primary`}`}>
                                    {data.isActive ? 'Actice' : 'Inactive'}
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-secondary" onClick={() =>handleOpen('edit')}> Update</button>
                            </td>
                            <td>
                                <button className="btn btn-accent"> Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default TabList
