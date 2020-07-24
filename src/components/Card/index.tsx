import React, { memo } from 'react'
import * as S from './styled'
import { Breed } from '../../shared/types/breeds'

type Props = {
  breed: Breed
}

const Card: React.FC<Props> = ({ breed }: Props) => (
  <S.Wrapper className="card">
    <S.Title>{breed.name}</S.Title>
    <S.Subtitle>
      {breed.origin}
    </S.Subtitle>
    <S.P>
      Affection {breed.affection_level}
    </S.P>
    <S.P>
      Energy {breed.energy_level}
    </S.P>
    <S.P>
      Temperament {breed.temperament}
    </S.P>
    <S.P>
      {breed.description}
    </S.P>
  </S.Wrapper>
)

export default memo(Card)
