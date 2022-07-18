import Skeleton from 'react-loading-skeleton'
import './loading.css';

const Item = () => {
    return (
        <div className="container">
            <Skeleton width={200} />
            <div className="row">
                <div className="col-md-6">
                    {/* big img  */}
                    <Skeleton height={400} />
                    {/* thubms  */}
                    <Skeleton borderRadius={'.5rem'} style={{ marginRight: '.5rem' }} inline={true} height={80} width={80} />
                    <Skeleton borderRadius={'.5rem'} style={{ marginRight: '.5rem' }} inline={true} height={80} width={80} />
                    <Skeleton borderRadius={'.5rem'} style={{ marginRight: '.5rem' }} inline={true} height={80} width={80} />
                    <Skeleton borderRadius={'.5rem'} inline={true} height={80} width={80} />
                </div>
                <div className="col-md-6">
                    {/* title  */}
                    <Skeleton className='mb-3' height={30} count={2} />
                    {/* desc  */}
                    <Skeleton className='mb-2' count={5} />
                    {/* price  */}
                    <Skeleton className='mb-2' width={100} />
                    {/* quantity text  */}
                    <Skeleton className='me-2' inline={true} width={50} />
                    {/* btn  */}
                    <Skeleton className='me-2' inline={true} height={40} width={50} />
                    {/* input  */}
                    <Skeleton className='me-2' inline={true} height={40} width={100} />
                    {/* btn  */}
                    <Skeleton className='me-2' inline={true} height={40} width={50} />
                    {/* cart btn  */}
                    <Skeleton height={40} />
                </div>
            </div>
        </div>
    )
}

const DetailsLoading = () => {
    return (
        <>
            <Item />
        </>
    )
}

export default DetailsLoading;