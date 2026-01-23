function Header() {
    return (
        <header>
            <h1>
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: '8px' }}
                >
                    <path
                        d="M12 2V8M12 8L8 12M12 8L16 12M12 22V16M12 16L8 12M12 16L16 12"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
                Sales Team Dashboard
            </h1>
        </header>
    );
}

export default Header;