import React, { useState } from 'react';
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Section from './src/components/Section';
import { Picker } from '@react-native-picker/picker';
import layout from './src/common/layout';

function App(): React.JSX.Element {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        category: '',
        multiselect: '',
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
    });

    const handleChange = (key: string, value: string) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };

    const clearData = () => {
        setFormData({
            name: '',
            email: '',
            message: '',
            category: '',
            multiselect: '',
            question1: '',
            question2: '',
            question3: '',
            question4: '',
            question5: '',
            question6: '',
        });
    };


    return (
        <>
            <View style={styles.clearButton}>
                    <Button title="Clear" onPress={clearData} color={styles.input.backgroundColor} />
            </View>
            <ScrollView style={[styles.scrollWrapper]}>
                <View style={layout.col12}>
                    <View style={[layout.row, layout.justifyContentCenter]}>
                        <View style={[layout.col4, layout.p3]}>
                            <View style={[styles.innerBlock]}>
                                <Text style={styles.label}>Name:</Text>
                                <TextInput
                                    style={[styles.input, styles.textInput]}
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChangeText={(value) => handleChange('name', value)}
                                />
                                <Text style={styles.label}>Question 1:</Text>
                                <TextInput
                                    style={[styles.input, styles.textInput]}
                                    placeholder="Question 1"
                                    value={formData.question1}
                                    onChangeText={(value) => handleChange('question1', value)}
                                />
                                <Text style={styles.label}>Question 2:</Text>
                                <TextInput
                                    style={[styles.input, styles.textInput]}
                                    placeholder="Question 2"
                                    value={formData.question2}
                                    onChangeText={(value) => handleChange('question2', value)}
                                />
                            </View>
                        </View>

                        <View style={[layout.col4, layout.p3]}>
                            <View style={[styles.innerBlock]}>
                                <Text style={styles.label}>Email:</Text>
                                <TextInput
                                    style={[styles.input, styles.textInput]}
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChangeText={(value) => handleChange('email', value)}
                                    keyboardType="email-address"
                                />
                                <Text style={styles.label}>Question 3:</Text>
                                <TextInput
                                    style={[styles.input, styles.textInput]}
                                    placeholder="Question 3"
                                    value={formData.question3}
                                    onChangeText={(value) => handleChange('question3', value)}
                                />
                                <Text style={styles.label}>Category:</Text>
                                <Picker
                                    selectedValue={formData.category}
                                    onValueChange={(value) => handleChange('category', value)}
                                    style={[styles.input, styles.picker]}
                                >
                                    <Picker.Item label="Select a category" value="" />
                                    <Picker.Item label="General Inquiry" value="general" />
                                    <Picker.Item label="Technical Support" value="support" />
                                    <Picker.Item label="Feedback" value="feedback" />
                                </Picker>
                            </View>
                        </View>

                        <View style={[layout.col4, layout.p3]}>
                            <View style={[styles.innerBlock]}>
                                <Text style={styles.label}>Message:</Text>
                                <TextInput
                                    style={[styles.textArea, styles.input]}
                                    placeholder="Enter your message"
                                    value={formData.message}
                                    onChangeText={(value) => handleChange('message', value)}
                                    multiline
                                />
                                <Text style={styles.label}>Question 4:</Text>
                                <TextInput
                                    style={[styles.input, styles.textInput]}
                                    placeholder="Question 4"
                                    value={formData.question4}
                                    onChangeText={(value) => handleChange('question4', value)}
                                />
                                <Text style={styles.label}>Question 5:</Text>
                                <TextInput
                                    style={[styles.input, styles.textInput]}
                                    placeholder="Question 5"
                                    value={formData.question5}
                                    onChangeText={(value) => handleChange('question5', value)}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={[layout.row, layout.justifyContentCenter]}>
                        <View style={[layout.col12, layout.p3]}>
                            <View style={[styles.innerBlock]}>
                                <Text style={styles.label}>Question 6:</Text>
                                <TextInput
                                    style={[styles.input, styles.textInput]}
                                    placeholder="Question 6"
                                    value={formData.question6}
                                    onChangeText={(value) => handleChange('question6', value)}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={[layout.row, layout.justifyContentCenter]}>
                        <View style={[layout.col6, styles.outputBox]}>
                            <Text selectable>
                                <Section
                                    statement="Name:\n   {{0}}\n"
                                    values={[formData.name]}
                                />
                                <Section
                                    statement="Question 1:\n   {{0}}\n"
                                    values={[formData.question1]}
                                />
                                <Section
                                    statement="Question 2:\n   {{0}}\n"
                                    values={[formData.question2]}
                                />
                                <Section
                                    statement="Email:\n   {{0}}\n"
                                    values={[formData.email]}
                                />
                                <Section
                                    statement="Question 3:\n   {{0}}\n"
                                    values={[formData.question3]}
                                />
                                <Section
                                    statement="Category:\n   {{0}}\n"
                                    values={[formData.category]}
                                />
                                <Section
                                    statement="Message:\n   {{0}}\n"
                                    values={[formData.message]}
                                />
                                <Section
                                    statement="Question 4:\n   {{0}}\n"
                                    values={[formData.question4]}
                                />
                                <Section
                                    statement="Question 5:\n   {{0}}\n"
                                    values={[formData.question5]}
                                />
                                <Section
                                    statement="Question 6:\n   {{0}}\n"
                                    values={[formData.question6]}
                                />
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    scrollWrapper: {
        backgroundColor: '#212441',
        display: 'flex',
        width: '100%',
        height: '100%',
        overflow: 'scroll',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    textInput: {
        maxHeight: 40,
    },
    textArea: {
        maxHeight: 80,
    },
    picker: {
        height: 50,
        maxHeight: 50,
        marginBottom: 15,
    },
    clearButton: {
        alignSelf: 'flex-end',
        borderRadius: 5,
        marginRight: 20,
        marginVertical: 10,
        width: 100,
    },
    outputBox: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    innerBlock : {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
    },
});

export default App;
