import React from "react";
import styled from "styled-components";

const LabelEstilizada = styled.label<{ darkmode: boolean }>`
    color: ${(props) => props.darkmode ? '#FFF' : '#002F52'};
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 16px;
    margin-bottom: 8px
`

interface InputEstilizadoProps {
    placeholderAlign: 'left' | 'center' | 'right';
    darkmode: boolean
}

const InputEstilizado = styled.input<InputEstilizadoProps>`
    font-size: 16px;
    line-height: 24px;
    padding: 8px 24px;
    border: 1px solid;
    border-radius: 45px;
    &:focus{
        outline: none;
    }
    width: 100%;
    box-sizing: border-box;
    background: ${(props: InputEstilizadoProps) => props.darkmode ? 'transparent' : '#FFF'};
    border-color: ${(props: InputEstilizadoProps) => props.darkmode ? '#FFF' : '#002F52'};
    text-align: ${(props: InputEstilizadoProps) => props.placeholderAlign};
    ::placeholder,
    ::-webkit-input-placeholder  {
        color: ${(props: InputEstilizadoProps) => props.darkmode ? '#FFF' : '#002F52'};
    }
`

export interface AbCampoTextoProps extends InputEstilizadoProps {
    label?: string;
    placeholder?: string;
    value: string;
    type?: 'text' | 'email' | 'password' | 'date';
    onChange: (value: string) => void
}

export const AbCampoTexto = ({ 
        label, 
        value, 
        onChange, 
        type = 'text', 
        placeholder = "", 
        placeholderAlign = 'left', 
        darkmode = false 
}: AbCampoTextoProps) => {
    return (
        <div>
            {label && <LabelEstilizada darkmode={darkmode}>
                {label}
            </LabelEstilizada>}
            <InputEstilizado
                placeholder={placeholder}
                placeholderAlign={placeholderAlign}
                darkmode={darkmode}
                type={type}
                value={value}
                onChange={event => onChange(event.target.value)}
            />
        </div>
    )
}
