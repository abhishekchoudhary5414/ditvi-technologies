import styles from './Skeleton.module.css';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  count?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  variant = 'rectangular',
  count = 1,
  className = '',
  style = {},
}) => {
  const getBorderRadius = () => {
    if (variant === 'circular') return '50%';
    if (variant === 'text') return '4px';
    return borderRadius;
  };

  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={`${styles.skeleton} ${className}`}
          style={{
            width,
            height,
            borderRadius: getBorderRadius(),
            ...style,
          }}
        />
      ))}
    </>
  );
};

export default Skeleton;
