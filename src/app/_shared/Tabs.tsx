import * as React from 'react';

import styles from './Tabs.module.scss';

interface Tab {
  title: string;
  key: string;
}

interface TabsProps {
  items: Tab[];
  activeKey: string;
  onChange: (key: string) => void;
}

export const Tabs = ({items, activeKey, onChange}: TabsProps) => {
  return (
      <div className={`${styles.moduleWrapper}`}>
        <div
            className="tabs ContentSBold flex w-fit flex-row items-center justify-center overflow-hidden">
          {items.map((tab, index) => {
            if (tab.key === activeKey) {
              return (
                  <div
                      key={index}
                      className="transition-all duration-500 tab py-[14px] px-[16px] border border-primaryWater500 hover:border-primaryWater300 rounded-[80px]"
                  >
                    {tab.title}
                  </div>
              );
            } else {
              return (
                  <div
                      key={index}
                      className="transition-all duration-500 cursor-pointer tab py-[14px] px-[16px] bg-transparent hover:bg-primaryWater300 border border-primarySpace1000 hover:border-primaryWater300 rounded-[80px]"
                      onClick={() => {
                        onChange(tab.key);
                      }}
                  >
                    {tab.title}
                  </div>
              );
            }
          })}
        </div>
      </div>
  );
};
