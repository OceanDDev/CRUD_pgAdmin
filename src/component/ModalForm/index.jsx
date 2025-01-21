/* eslint-disable react/prop-types */

const ModalForm = ({ isOpen, onClose, mode, OnSubmit }) => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg py-4 text-center">
                        {mode === "edit" ? "Edit User" : "User Detail"}
                    </h3>
                    <form method="dialog" className="space-y-6">
                        {/* Input for Name */}
                        <div>
                            <label className="block font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Enter name"
                            />
                        </div>

                        {/* Input for Email */}
                        <div>
                            <label className="block font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Enter email"
                            />
                        </div>

                        {/* Input for Job */}
                        <div>
                            <label className="block font-semibold mb-2">Job</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Enter job title"
                            />
                        </div>

                        {/* Rate and Status */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold mb-2">Rate</label>
                                <input
                                    type="number"
                                    className="input input-bordered w-full"
                                    placeholder="Enter rate"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Status</label>
                                <select className="select select-bordered w-full">
                                    <option value="inactive">Inactive</option>
                                    <option value="active">Active</option>
                                </select>
                            </div>
                        </div>

                        {/* Close and Submit buttons */}
                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                className="btn btn-outline"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-success">
                                {mode === "edit" ? "Save Changes" : "Add User"}
                            </button>
                        </div>
                    </form>
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>
            </dialog>
        </div>
    );
};

export default ModalForm;
