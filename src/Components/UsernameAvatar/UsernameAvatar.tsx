import Avatar from 'react-avatar';
type Props = {
    username: string,
    updateSidebar: () => void
}
const UsernameAvatar: React.FC<Props> = ({ username, updateSidebar }) => {
    return <Avatar onClick={updateSidebar} style={{ marginRight: "2rem", cursor: "pointer" }} size="35" round={true} name={username} />
}

export default UsernameAvatar
