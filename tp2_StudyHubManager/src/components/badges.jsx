function Badges( { type, children} ) {
    return (        
        <div className={`badge badge-${type}`}>
            {children}
        </div>
    )
}
export default Badges;