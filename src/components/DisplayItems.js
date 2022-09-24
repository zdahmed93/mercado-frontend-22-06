import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllItems } from '../redux/actions/itemsActionCreators'
import ItemCard from './ItemCard'

function DisplayItems() {
    const items = useSelector(state => state.items.all)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllItems())
    }, [])
    return (
        <Container>
            <Row>
                {items.map(item => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </Row>
        </Container>
    )
}

export default DisplayItems