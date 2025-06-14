import useTheme from '../contexts/theme.js';

function ThemeToggle() {
    const { themeMode, darkTheme, lightTheme } = useTheme();

    const onChange = (e) => {
        if (e.currentTarget.checked) {
            darkTheme();
        } else {
            lightTheme();
        }
    };


    return (
        <div className="flex items-center justify-end py-4 bg-gray-200 px-4">
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    onChange={onChange}
                    className="sr-only peer"
                    checked={themeMode === "dark"}
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-600 rounded-full peer dark:peer-checked:bg-blue-500 peer-checked:bg-blue-600 transition-colors duration-300"></div>
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-full"></div>
            </label>
        </div>
    );
}

export default ThemeToggle;
