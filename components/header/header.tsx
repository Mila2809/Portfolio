const Header = () => {
    return (
        <header className="w-full h-full fixed flex justify-center pointer-events-none z-20">
            <svg
                className="fixed md:mt-0 -mt-5"
                width="100%"
                height="90"
                viewBox="0 0 898 90"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 9.3921C1 3.6527 5.6527 -1 11.3921 -1H887.108C892.847 -1 897.5 3.6527 897.5 9.3921C897.5 15.1315 892.847 19.7842 887.108 19.7842H810.155C800.182 19.7842 790.84 24.6593 785.136 32.8395L755.003 76.0558C749.486 83.9678 740.45 88.683 730.804 88.683H169.698C160.053 88.683 151.017 83.968 145.5 76.0565L115.364 32.8388C109.66 24.659 100.318 19.7842 90.3459 19.7842H11.3921C5.6527 19.7842 1 15.1315 1 9.3921Z"
                    fill="white"
                    stroke="white"
                />
            </svg>
            <div className="relative md:border-[20px] border-[10px] pointer-events-none border-white text-black flex justify-center w-full"></div>
        </header>
    );
};

export default Header;
