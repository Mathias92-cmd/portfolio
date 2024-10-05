import Link from 'next/link';

import { FaGithub , FaLinkedin} from 'react-icons/fa';

const resSocial = [
    {icon: <FaGithub />, path: 'https://github.com/Mathias92-cmd'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/mathias-morel-753951329/'},
];


const Social = ({containerStyles , iconStyles}) => {
    return (
    <div className={containerStyles}>
        {resSocial.map((item, index) => {
            return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
    );
};

export default Social;