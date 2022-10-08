// Library
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
// Assets
import styles from './Search.module.scss';
import { useDebounce } from '~/hookes';
import { searchService } from '~/services';
// Components
import { IconSearch, IconXMarkCircle, IconSpinnerCircle } from '~/components/Icon';
import Popper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles);
const Search = () => {
    const inputRef = useRef();
    // States
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [searchResultIsShown, setSearchResultIsShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // Effects
    let debouncedSearchText = useDebounce(searchText, 700);
    useEffect(() => {
        const fetchApi = async (data) => {
            setIsLoading(true);
            const searchResponse = await searchService.search(data);
            setSearchResult(searchResponse.data);
            setIsLoading(false);
        };
        if (!!debouncedSearchText) {
            let data = {
                q: debouncedSearchText,
                type: 'less',
            };
            fetchApi(data);
        } else {
            setSearchResult([]);
            setIsLoading(false);
        }
    }, [debouncedSearchText]);
    // Handlers
    const handleDeleteBtnClick = () => {
        setSearchText('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleInputText = (e) => {
        if (!e.target.value.startsWith(' ')) {
            setSearchText(e.target.value);
        }
    };
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <TippyHeadless
                visible={searchResult.length > 0 && searchResultIsShown}
                interactive={true}
                placement={'bottom-start'}
                onClickOutside={() => {
                    setSearchResultIsShown(false);
                }}
                render={() => (
                    <div className={cx('search-result')}>
                        <Popper
                            style={{
                                maxHeight: 244,
                                paddingTop: 8,
                            }}
                        >
                            <h4 className={cx('title')}>Accounts</h4>
                            {searchResult.map((result) => {
                                return (
                                    <AccountItem
                                        key={result.id}
                                        data={result}
                                        afterIcon={
                                            result.tick ? (
                                                <FontAwesomeIcon
                                                    style={{ fontSize: 14, color: 'rgb(32, 213, 236)', marginLeft: 4 }}
                                                    icon={faCircleCheck}
                                                />
                                            ) : undefined
                                        }
                                    ></AccountItem>
                                );
                            })}
                        </Popper>
                    </div>
                )}
            >
                <div className={cx('search-box')}>
                    <input
                        ref={inputRef}
                        value={searchText}
                        type="text"
                        placeholder="Search accounts and videos"
                        onChange={handleInputText}
                        onFocus={(e) => {
                            setSearchResultIsShown(true);
                        }}
                    />
                    {!!searchText && !isLoading ? (
                        <button className={cx('delete-btn')} onClick={handleDeleteBtnClick}>
                            <IconXMarkCircle width={16} height={16}></IconXMarkCircle>
                        </button>
                    ) : undefined}
                    {isLoading ? (
                        <IconSpinnerCircle
                            width={16}
                            height={16}
                            margin={'0 12px'}
                            className={cx('loadingSpinner')}
                        ></IconSpinnerCircle>
                    ) : undefined}
                    <div className={cx('spliter')}></div>
                    <button onMouseDown={(e) => e.preventDefault()} className={cx('submit-btn')}>
                        <IconSearch width={24} height={24}></IconSearch>
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
};

export default Search;
