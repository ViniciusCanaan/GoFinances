import React, { useState } from 'react';

import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';

import { Input } from '../../components/Forms/input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelect } from '../../components/Forms/CategorySelect';

export function Register() {

    const [transactionType, setTransactionType] = useState('');

    function handleTransactionTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <Input
                        placeholder='Nome'
                    />
                    <Input
                        placeholder='Preço'
                    />
                    <TransactionTypes>
                        <TransactionTypeButton 
                        type='up' 
                        title='Income' 
                        onPress={() => handleTransactionTypeSelect('up')}
                        isActive={transactionType === 'up'}
                        />

                        <TransactionTypeButton 
                        type='down' 
                        title='Outcome' 
                        onPress={() => handleTransactionTypeSelect('down')}
                        isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>
                    <CategorySelect title='Categoria'/>
                </Fields>
                <Button title="Enviar" />
            </Form>
        </Container>
    );
} 