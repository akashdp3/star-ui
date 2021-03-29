import * as React from 'react';
import Styled, { keyframes } from 'styled-components';

interface ISkeletonItem {
    /* id: Unique identifier required only in case of config */
    id?: number;
    /* children: prefer string type */
    children?: React.ReactNode;
    /* if true, show skeleton. Otherwise return children */
    isLoading?: Boolean;
    /* Skeleton height. Default height: inherit */
    height?: String;
    /* Skeleton width. Default width: 100% */
    width?: String;
    /* Skeleton border radius. Default value: 2px */
    borderRadius?: String;
    /* Skeleton animation speed. Default: 1200ms */
    speed?: String;
    /* Repeat count for skeleton. Default: 1 */
    repeatCount?: Number;
}
interface ISkeleton extends ISkeletonItem {
    /* config: Configuration for skeleton */
    config?: Array<ISkeletonItem>;
}
const SKELETON_ITEM_DEFAULT_PROPS = {
    isLoading: true,
    height: 'inherit',
    width: '100%',
    borderRadius: '2px',
    speed: '1200ms',
    repeatCount: 1
};
const SKELETON_DEFAULT_PROPS = {
    isLoading: true,
    config: []
}

/* Skeleton animation */
const shine = keyframes`
  0% { background-position: 100% 50%; }
  100% { background-position: -100% 50%; }
`;

const StyledSkeleton = Styled.div`
    margin-bottom: ${(props: any) => props.marginBottom || "16px"};
    box-sizing: border-box;
    height: ${(props: any) => props.height || "inherit"};
    animation-duration: ${(props: any) => props.speed || "1200ms"};
    width: ${(props: any) => props.width || "100%"};
    animation-name: ${shine};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border-radius: ${(props: any) => props.borderRadius || "2px"};
    background-image: linear-gradient(90deg, rgb(221, 221, 221, 0.6) 0%, rgb(221, 221, 221, 0.6) 20%, transparent 50%, rgb(221, 221, 221, 0.6) 80%, rgb(221, 221, 221, 0.6) 100%);
    background-position-x: 0%;
    background-position-y: 0%;
    background-size: 200% 200%;
`;

const range = (count: Number) => {
    return Array(count)
        .fill(1)
        .map((_, index) => index + 1);
};

const SkeletonItem = (props: ISkeletonItem) => {
    const { isLoading, children, repeatCount, ...others } = props;
    const lines = range(repeatCount || 1);

    if (isLoading) {
        return (
            <>
                {lines.map(line => (
                    <StyledSkeleton {...others} key={line} />
                ))}
            </>
        );
    }

    return <div>{children}</div>;
};

SkeletonItem.defaultProps = SKELETON_ITEM_DEFAULT_PROPS;

const Skeleton = (props: ISkeleton) => {
    const { isLoading, config, children, ...others } = props;

    if (isLoading && config && config.length > 0) {
        return (
            <>
                {config.map(x => (
                    <React.Fragment key={x.id || null}>
                        <SkeletonItem {...x} isLoading={isLoading} />
                    </React.Fragment>
                ))}
            </>
        );
    }

    return (
        <SkeletonItem {...others} isLoading={isLoading || false}>
            {children}
        </SkeletonItem>
    );
};

Skeleton.defaultProps = SKELETON_DEFAULT_PROPS;
export default Skeleton;
