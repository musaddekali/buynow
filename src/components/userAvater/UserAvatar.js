import './user-avatar.css';

const UserAvatar = ({ src, name }) => {
    return (
        <div className="user-avatar-container">
            {
                src ? (
                    <img
                        className="user-avatar-img"
                        src={src ? src : null}
                        alt={name ? name : null}
                    />
                ) : (
                    <span className="user-avatar-text">
                        {name?.charAt(0).toUpperCase()}
                    </span>
                )
            }
        </div>
    )
}

export default UserAvatar;