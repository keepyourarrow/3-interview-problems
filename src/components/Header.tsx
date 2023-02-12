import "./index.scss";

type Props = {
    title: string;
};

const Header = ({ title }: Props) => {
    return <header className="header">{title}</header>;
};

export default Header;
