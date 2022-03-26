import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import ItemCard from '../components/ItemCard'

import { fetchAllItems } from '../redux/actions/itemsActionCreators'

function Home() {
    const items = useSelector(state => state.items.all)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllItems())
    }, [])
  return (
      <Container>
          <Row >
            {items.map(item => (
                <ItemCard item={item} />
            ))}
          </Row>
      </Container>
  )
}

export default Home