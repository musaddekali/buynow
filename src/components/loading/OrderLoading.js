import Skeleton from 'react-loading-skeleton'

const Item = () => {
    return (
        <div className="container">
            <article style={{ boxShadow: 'var(--shadow-sm)', padding: '.5rem' }} className='row mb-3'>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-6">
                            <Skeleton width={80} height={80} />
                        </div>
                        <div className="col-6">
                            {/* title  */}
                            <Skeleton />
                            {/* date  */}
                            <Skeleton />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* price  */}
                    <Skeleton />
                    {/* btn  */}
                    <Skeleton className='me-2' inline={true} width={40} height={40} />
                    {/* btn  */}
                    <Skeleton inline={true} width={40} height={40} />
                </div>
            </article>
        </div>
    )
}

const OrderLoading = () => {
    return (
        <>
            {
                Array.from({ length: 10 }).map((a, i) => <Item key={i} />)
            }
        </>
    )
}

export default OrderLoading;