import './style.scss'
import cn from 'clsx';
import ArrUpRight from '@assets/svg/arrow-up-right.svg?raw';


const ArrowUpRight = ({text, classColor, ...props}) => {
    return (
        <div className={cn('arrowUpRight', classColor ? classColor : 'txt-orange')}>
            <div className="arrowUpRight-txt txt-up txt-med">{text ? text : 'Dummy Text'}</div>
            <div className='arrowUpRight-ic'>
                <div className="arrowUpRight-ic-inner ic ic-24" dangerouslySetInnerHTML={{ __html: ArrUpRight }} /> 
                <div className="arrowUpRight-ic-inner ic ic-24" dangerouslySetInnerHTML={{ __html: ArrUpRight }} /> 
            </div>
        </div>
    )
}

export default ArrowUpRight;