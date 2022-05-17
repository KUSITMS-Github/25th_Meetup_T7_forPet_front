import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { Colors } from '../../styles/ui';

interface ModalDefaultType {
    onClickToggleModal: () => void;
    name: String;
}

function OfflineMapModal({ onClickToggleModal, name }: PropsWithChildren<ModalDefaultType>) {
    return (
        <>
        <Modal>
        <div>{name}</div>
        
        </Modal>

        <Close onClick={(e: React.MouseEvent) => { 
                e.preventDefault();
                if (onClickToggleModal) { onClickToggleModal(); }
            }}> 종료 </Close>
        </>
      
    );
  }


export default OfflineMapModal;

const Modal = styled.div`
    position: absolute;
    top: 70px;
    left: 32.1%;
    z-index: 2;

    width: 27%;
    height: calc(100vh - 70px);
    background-color: ${Colors.white};
  
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;

const Close = styled.div`
    position: absolute;
    top: 175px;
    left: 59.1%;
    z-index: 1;

    width: 70px;
    height: 70px;
    background-color: ${Colors.white};
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
    border-radius: 0px 5px 5px 0px;
`;