import { useEffect, useRef, useState } from 'react';
import styles from './input.module.scss';

const Input = (props: any) => {
    const inputRef: any = useRef(null);
    const [inputVal, setInputVal] = useState<any>('');
    const [checkFocus, setCheckFocus] = useState<boolean>(false);
    const [inputStatus, setInputStatus] = useState<any>(false);

    useEffect(() => {
        setInputStatus(!props.editable ?? false);
        if (props.focusInput) {
            inputRef.current.focus();
            setCheckFocus(true);
        }
    }, [props]);

    useEffect(() => {
        setInputVal(props?.defaultValue ?? '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.data.inputName]);

    const handleFocus = (targetEle: any, type: any) => {
        let getFocusEle: any = document.activeElement;
        if (type == 'blur') {
            getFocusEle.blur();
            targetEle.blur();
        } else if (type == 'focus' && checkFocus) {
            getFocusEle.blur();
            targetEle.focus();
        }
        if (typeof props?.disableFocus === 'function') {
            props?.disableFocus(false);
        }
    };

    const handleInputData = (val: any, storeKey: any, required: any = true) => {
        let userData: any = {
            [storeKey]: val,
            key: storeKey,
        };
        let formField = {
            [storeKey]: [storeKey],
        };
        setInputVal(val);
        props?.onChange({
            userData,
            formField,
            storeKey,
        });
    };

    const handleRemove = (storeKey: any) => {
        let userData: any = {
            [storeKey]: null,
            key: storeKey,
        };
        let formField = {
            [storeKey]: [storeKey],
        };
        setInputVal(null);
        props?.onChange({
            userData,
            formField,
            storeKey,
        });
    };

    return (
        <>
            {(() => {
                switch (props?.data?.type) {
                    case 'select':
                        return (
                            <div
                                onClick={(e: any) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                className={`${props?.className ?? ''}`}>
                                {(props?.data?.label) && (<label htmlFor={props?.data?.inputName} className={`block text-[18px] sm:text-[20px] leading-[30px] text-left text-[#F2F0EB] mb-[15px] ${(props?.data?.required || props?.required) && "after:content-['*'] after:text-[#dd0735] after:pl-[3px]"}`}>{props?.data?.label}</label>)}
                                <div className={`relative`}>
                                    <select
                                        className={`bg-[#1C1C1F] p-[16px] sm:p-[20px] rounded-[8px] w-full h-full text-[20px] leading-[24px] text-primaryLight font-[400] placeholder:text-[#F2F0EB] appearance-none transition-all duration-[0.2s] ease-in focus:!outline-offset-0 focus:!outline-0 focus:!shadow-none focus:border-[#F2F0EB] focus-visible:outline-[0px] relative z-1 cursor-pointer budget_list`}
                                        value={inputVal}
                                        id={props?.data?.inputName}
                                        name={props?.data?.inputName}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            handleInputData(e.target.value, props?.data?.inputName);
                                        }}
                                    >
                                        <option
                                            className='text-primaryLight'
                                            value=""
                                            disabled={true}
                                        >
                                            Select Your Budget
                                        </option>
                                        {props?.options?.map(
                                            (item: any, i: number) => (
                                                <option
                                                    key={i}
                                                    className='text-primaryLight'
                                                    value={item.option}
                                                >
                                                    {item.option}
                                                </option>
                                            )
                                        )}
                                    </select>
                                    {(props?.data?.required || props?.required) && (<span
                                        id={`${props?.data?.inputName}_error`}
                                        role="alert"
                                        className={`text-[16px] text-[#d91f33] font-normal opacity-0 absolute bottom-[-22px] left-0 px-[2px] py-0 z-[0] input-group-wrapper__error ${styles['input-error'] ?? ''
                                            } ${props?.errorData.show ? styles['show'] ?? '' : ''}`}>
                                        {props?.errorData.msg}
                                    </span>)}
                                </div>
                            </div>
                        );
                    case 'textarea':
                        return (
                            <div
                                onClick={(e: any) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                className={`${props?.className ?? ''}`}>
                                {(props?.data?.label) && (<label htmlFor={props?.data?.inputName} className={`block text-[18px] sm:text-[20px] leading-[30px] text-left text-[#F2F0EB] mb-[15px] ${(props?.data?.required || props?.required) && "after:content-['*'] after:text-[#F2F0EB] after:pl-[3px]"}`}>{props?.data?.label}</label>)}
                                <textarea
                                    className={`text-[18px] leading-[1.5] bg-[#141416] text-[#F2F0EB] font-normal w-full h-full p-[16px] sm:p-[20px] rounded-[4px] shadow-none placeholder:text-[#F2F0EB] ${props?.inputClassName ?? ''}`}
                                    id={props?.data?.inputName}
                                    name={props?.data?.inputName}
                                    placeholder={props?.data?.placeholder || ''}
                                    rows={props?.row ?? 6}
                                    value={inputVal}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        handleInputData(e.target.value, props?.data?.inputName);
                                    }}
                                />
                                {(props?.data?.required || props?.required) && (<span
                                    id={`${props?.data?.inputName}_error`}
                                    role="alert"
                                    className={`text-[16px] text-[#d91f33] font-normal opacity-0 absolute bottom-[-22px] left-0 px-[2px] py-0 z-[0] input-group-wrapper__error ${styles['input-error'] ?? ''
                                        } ${props?.errorData.show ? styles['show'] ?? '' : ''}`}>
                                    {props?.errorData.msg}
                                </span>)}
                            </div>
                        );
                    default:
                        return (
                            <div
                                onClick={(e: any) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                className={`${props?.className ?? ''}`}>
                                <div className="relative">
                                    {(props?.data?.label) && (<label htmlFor={props?.data?.inputName} className={`block text-[18px] sm:text-[20px] leading-[30px] text-left text-[#F2F0EB] mb-[10px] sm:mb-[15px] ${(props?.data?.required || props?.required) && "after:content-['*'] after:text-[#F2F0EB] after:pl-[3px]"}`}>{props?.data?.label}</label>)}
                                    <input
                                        autoComplete={props?.data?.autoComplete || undefined}
                                        autoFocus={props?.data?.autoFocus || undefined}
                                        enterKeyHint={props?.data?.disabled || undefined}
                                        min={(props?.data?.type === 'less-than' || props?.data?.type === 'greater-than') ? '0' : props?.data?.min || undefined}
                                        max={props?.data?.max || undefined}
                                        minLength={props?.data?.minLength || undefined}
                                        maxLength={props?.data?.maxLength || undefined}
                                        pattern={props?.data?.pattern || undefined}
                                        readOnly={props?.data?.readOnly || undefined}
                                        placeholder={props?.data?.placeholder || ''}
                                        size={props?.data?.size || undefined}
                                        type={props?.data?.type === 'less-than' || props?.data?.type === 'greater-than' ? 'number' : 'text'}
                                        name={props?.data?.inputName}
                                        id={props?.data?.inputName}
                                        className={`bg-[#1C1C1F] p-[16px] sm:p-[20px] rounded-[8px] w-full h-full text-[20px] leading-[24px] text-primaryLight font-[400] placeholder:text-[#F2F0EB] appearance-none transition-all duration-[0.2s] ease-in ${props?.inputClassName ?? ''}`}
                                        // required={props?.data.required ?? true}
                                        disabled={inputStatus}
                                        aria-required={props.ariaRequired ?? 'true'}
                                        autoCapitalize={'none'} // off or none || on or sentences || words || characters
                                        dir="ltr"
                                        value={inputVal}
                                        aria-describedby={`${props?.data?.inputName}_error`}
                                        ref={inputRef}
                                        onClick={(e) => {
                                            handleFocus(e.target, 'focus');
                                        }}
                                        onBlur={(e) => {
                                            handleFocus(e.target, 'blur');
                                        }}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            handleInputData(e.target.value, props?.data?.inputName);
                                        }}
                                    />
                                    {(props?.data?.required || props?.required) && (
                                        <span
                                            id={`${props?.data?.inputName}_error`}
                                            role="alert"
                                            className={`text-[16px] text-[#d91f33] font-normal opacity-0 absolute bottom-[-25px] left-0 px-[2px] py-0 z-[0] input-group-wrapper__error ${styles['input-error'] ?? ''
                                                } ${props?.errorData.show ? styles['show'] ?? '' : ''}`}>
                                            {props?.errorData.msg}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                }
            })()}
        </>
    );
};

export default Input;
