import Image from "next/image";
import logo from "../../public/behairful-logo-main.svg";

const Logo = () => {
    return (
        <header style={{textAlign: "center", padding: "2.5rem"}}>
            <Image src={logo} width={'259px'} height={'146px'} alt={'behairful-logo'} />
        </header>
    );
}

export default Logo