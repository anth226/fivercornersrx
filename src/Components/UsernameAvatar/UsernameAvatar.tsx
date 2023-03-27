import Avatar from 'react-avatar';
type Props = {
    username: string,
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
const UsernameAvatar: React.FC<Props> = ({ username, setShowSidebar }) => {
    return <Avatar onClick={(prevState) => setShowSidebar(true)} style={{ marginRight: "2rem", cursor: "pointer" }} size="35" round={true} name={username} />
}

export default UsernameAvatar
