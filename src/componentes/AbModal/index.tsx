import React, { ReactNode } from "react"
import styled from "styled-components";

export interface AbModalProps {
    children: ReactNode,
    aberta: boolean,
    aoFechar: () => void
}

const JanelaModal = styled.div`
    position: fixed;
    padding: 64px;
    background: #FFFFFF;
    box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const FundoModal = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: rgba(101, 101, 101, 0.85);
`

export const AbModal = ({ children, aberta, aoFechar }: AbModalProps) => {
    if (!aberta) {
        return <></>
    }
    return (
        <>
            <FundoModal onClick={aoFechar} />
            <JanelaModal>
                {children}
            </JanelaModal>
        </>
    )
}