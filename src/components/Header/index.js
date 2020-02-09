import React, { useContext } from 'react';

import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

export default function Header({ toggleTheme }) {
    const { colors, title } = useContext(ThemeContext);
    return (
        <Container>
            Hello, World
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                uncheckedIcon={false}
                offColor="#333"
                onColor={colors.secundary}
            />

        </Container>
    );
}
