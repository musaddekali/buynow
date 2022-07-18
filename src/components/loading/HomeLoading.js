import Skeleton from 'react-loading-skeleton'
import './loading.css';

const Item = () => {
    return (
        <article>
            {/* image */}
            <Skeleton height={100} />
            {/* title  */}
            <Skeleton count={2} />
            {/* price  */}
            <Skeleton width={100} />
            {/* button  */}
            <Skeleton width={50} height={30} />
            <Skeleton height={30} />
        </article>
    )
}

const HomeLoading = () => {
    return (
        <>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                gap: '1rem',
                padding: '1rem'
            }}>
                {
                    Array.from({length: 20}).map((a, i) => <Item key={i} />)
                }
            </div>
        </>
    )
}

export default HomeLoading;