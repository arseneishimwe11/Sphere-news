import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DownIcon, UpIcon } from "./Icons";

const CustomSelect = ({ value, options, placeholder, onChange, radius, zIndex }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();
    const itemRef = useRef();

    const handleOutsideClick = (e) => {
        if (e.target.contains(dropdownRef.current)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    useEffect(() => {
        if (isOpen) {
            const activeItem = itemRef.current.querySelector(".active");
            itemRef.current.scrollTop = activeItem?.offsetTop - 72;
        }
    }, [isOpen]);
    return (
        <DropdownWrapper className={`border border-solid rounded-${radius}`} ref={dropdownRef}>
            <DropdownBtn onClick={() => setIsOpen(!isOpen)} className={`rounded-${radius}`}>
                {value || placeholder}
                {!isOpen ? <DownIcon /> : <UpIcon />}
            </DropdownBtn>
            {isOpen && (
                <DropdownList ref={itemRef} className={zIndex && 'z-[500]'}>
                    {options.map((opt, index) => (
                        <DropdownItem
                            key={index}
                            onClick={() => {
                                onChange(opt);
                                setIsOpen(false);
                            }}
                            className={opt === value && "active"}
                        >
                            {opt}
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </DropdownWrapper>
    );
};

export default CustomSelect;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DropdownBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  height: 44px;
  background-color: #FFFFFF;
  color: #414342;
  font-size: 16px;
  font-weight: 700;
  padding: 0 14px;
  cursor: pointer;
  svg {
    width: 16px;
  }
`;

const DropdownList = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  margin-top: 4px;
  border: 1px solid #eee;
  position: absolute;
  width: 100%;
  margin-top: 48px;
  max-height: 180px;
  overflow-y: auto;
`;

const DropdownItem = styled.button`
  min-height: 36px;
  background: #fff;
  border: none;
  color: #253858;
  text-align: left;
  cursor: pointer;
  padding: 0 14px;
  font-size: 14px;
  &.active,
  &:hover {
    background-color: #eee;
  }
`;
