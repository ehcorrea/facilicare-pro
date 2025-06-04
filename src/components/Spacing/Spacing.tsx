import * as S from './Spacing.styles';

export function Spancing({ x, y }: S.ContainerProps) {
  return <S.Container testID="spacing" x={x} y={y} />;
}
