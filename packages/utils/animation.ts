type AnimationType = 'fadeOut' | 'fadeIn'

/**
 * 创建动画style
 */
export const createAnimationStyle = (animationType: AnimationType) => {
    if(animationType === 'fadeIn') {
        return `
            animation: 500ms ease-out forwards;
        `
    }
}