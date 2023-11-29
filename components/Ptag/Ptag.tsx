import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag: React.FC<PtagProps> = ({
    size = 'm',
    children,
    className,
    ...props
}) => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.l]: size === 'l',
            })}
            {...props}
        >
            {children}
        </p>
    );
};
