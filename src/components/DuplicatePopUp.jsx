export default function DuplicatePopUp({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            <div className="relative bg-linear-to-br from-blue-600 to-blue-900 
                text-white w-full max-w-xs sm:max-w-md 
                p-6 sm:p-10 rounded-2xl shadow-2xl 
                animate-fadeIn overflow-hidden
                flex flex-col items-center justify-center"
            >

                <div className="text-center">
                    <h2 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">
                        Duplicate Task
                    </h2>

                    <p className="text-sm sm:text-base opacity-90">
                        This task already exists. Please enter a different one.
                    </p>
                </div>

                <div className="mt-4 sm:mt-6 text-center">
                    <button
                        onClick={onClose}
                        className="bg-white text-blue-700
                        px-4 sm:px-6 py-2 rounded-xl font-semibold 
                        hover:bg-gray-200 transition"
                    >
                        Got it
                    </button>
                </div>
            </div>
        </div>
    );
}
