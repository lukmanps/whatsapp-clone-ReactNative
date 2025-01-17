import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const DropDown = ({
    options,
    selectedValue,
    onSelect,
    placeholder = 'Select an option',
    containerStyle = {},
    dropdownStyle = {},
    optionStyle = {},
    optionTextStyle = {},
    selectedTextStyle = {},
}: any) => {
    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    const renderItem = ({ item }: any) => (
        <TouchableOpacity
            style={[styles.option, optionStyle]}
            onPress={() => {
                onSelect(item);
                setVisible(false);
            }}
        >
            <Text style={[styles.optionText, optionTextStyle]}>
                {item.label || item}
            </Text>
        </TouchableOpacity>
    );

    const selectedLabel = selectedValue
        ? (selectedValue.label || selectedValue)
        : placeholder;

    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity
                style={styles.listItem}
                onPress={toggleDropdown}
            >
                <Text style={[
                    styles.selectedText,
                    !selectedValue && styles.placeholderText,
                    selectedTextStyle,
                ]}>
                    {selectedLabel}
                </Text>
            </TouchableOpacity>

            <Modal
                visible={visible}
                transparent
                animationType="slide"
                onRequestClose={() => setVisible(false)}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={() => setVisible(false)}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.optionsContainer}>
                            <FlatList
                                data={options}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                width: '100%',
            },
            android: {
                width: '100%',
            },
            web: {
                width: '100%',
            }
        })
    },
    listItem: {
        ...Platform.select({
            ios: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 6,
                marginBottom: 10
            },
            android: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 6,
                marginBottom: 10
            },
            web: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 6,
                marginBottom: 10
            },

        })

    },
    dropdown: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        minHeight: 50,
        justifyContent: 'center',
    },
    selectedText: {
        fontSize: 16,
        color: '#000',
    },
    placeholderText: {
        color: '#999',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        maxHeight: '50%',
    },
    optionsContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },
    option: {
        padding: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#eee',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
});

export default DropDown