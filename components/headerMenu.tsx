import "./styles/header.css"

export default function HeaderMenu() {
    return (
        <div className="nav-bar">
            <div className="logo">
                <a href="#"><img src="https://images.squarespace-cdn.com/content/v1/673ecb02839de7577f9c0982/9ab44559-e4c0-42d3-b18e-0379f4490006/ADHOC_LOGO_FULL_SMALLWhite.png?format=1500w" height="50px" /></a>
            </div>
            <div className="menu-right">
                <ul>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="links-buttons">
                    <ul>
                        <li><button>1</button></li>
                        <li><button>2</button></li>
                        <li><button>3</button></li>
                        <li><button>4</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
