import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import DataProduct from '../../data/dataProduct';

import ItemProduct from '../Item/ItemProduct';

export default function ProductRelevant(props) {
    const dataProduct = DataProduct();
    const { data } = props;
    const dataType = data.type;
    const [dataRelevants, setDataRelevants] = useState([]);

    useEffect(() => {
        const newData = dataProduct.filter((product) => {
            return ((product.type === dataType) && (product.id != data.id)); 
        });
        setDataRelevants(newData);
    }, [dataType]); 

    return (
        <ScrollView style={styles.container}>
            {dataRelevants.map((data) => (
                <ItemProduct data={data} key={data.id} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
});
