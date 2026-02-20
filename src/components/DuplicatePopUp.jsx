export default function DuplicatePopUp({ onClose }) {
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center">

            <div
                className="absolute inset-0 bg-black/40 rounded-3xl"
                onClick={onClose}
            />

            <div className="relative
                w-55 sm:w-64 p-4 sm:p-5
                bg-linear-to-br from-blue-600 to-blue-900
                text-white rounded-xl shadow-2xl
                flex flex-col items-center
                mx-auto -mt-16 sm:-mt-20"
            >
                <h2 className="text-sm sm:text-base font-semibold text-center">
                    Duplicated task
                </h2>

                <div className="mt-3 text-center">
                    <button
                        onClick={onClose}
                        className="bg-white text-blue-700 px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
                    >
                        Got it
                    </button>
                </div>
            </div>
        </div>
    );
}