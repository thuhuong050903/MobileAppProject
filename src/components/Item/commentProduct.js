import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default ItemComment = (props) => {
    const { data } = props;
    const [comment, setComment] = useState(data);

    const Item = ({data}) => (
            <TouchableOpacity style={styles.ItemContainer}>
                <Image style={styles.image} source={{uri: data.avatar}}></Image>
                <View style={styles.content}>
                    <View style={styles.viewName}>
                        <View>
                            <Text style={styles.name}>{data.username}</Text>
                            <Text style={styles.date}>{data.date}</Text>
                        </View>
                        <View style={styles.viewRate}>
                            <Image source={require('../../assets/icons/Icon-Star.png')}/>
                            <Text style={styles.rate}>{data.rate}</Text>
                        </View>
                    </View>
                    <View>
                        <Text>{data.comment}</Text>
                    </View>
                </View>     
            </TouchableOpacity>
        );

    return (
        <ScrollView style={styles.container}>
            {comment.map((commentData) => (
                <Item data={commentData} key={commentData.id} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ItemContainer: {
        flex: 1,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 15,
        backgroundColor: '#fff',
        padding: 10,
        minHeight: 100,
        borderRadius: 15,
        borderColor: '#F4F4F4',
        backgroundColor: '#FFF',
        shadowColor: '#5A6CEA',
        shadowOffset: {
            width: 12,
            height: 26,
            },
        shadowRadius: 50,
        shadowOpacity: 0.07,
        elevation: 3,
    },
    content: {
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        marginLeft: 15,
        width: '60%',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        color: '#808080',
        marginBottom: 5,
    },
    rate: {
        fontSize: 18,
        color: 'blue',
        fontWeight: '800',
        marginLeft: 8,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 14,
    },
    viewName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewRate: {
        flexDirection: 'row',
        backgroundColor: '#0022',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,
        padding: 5,
    },
})
