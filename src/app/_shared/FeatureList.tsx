interface FeatureListProps {
  dataList: any;
}

export default function FeatureList({ dataList }: FeatureListProps) {
  return (
    <ul className='flex flex-col self-stretch items-start gap-[32px]'>
      {dataList.map((item: any, index: number) => {
        return (
          <li key={item?.id || index} className='flex items-start self-stretch gap-[16px]'>
            <div>
              <div className='h-[24px] w-[24px] flex items-center rounded-full border-[1px] border-[#213459] justify-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <mask id='mask0_6530_5298' maskUnits='userSpaceOnUse' x='0' y='0' width='16' height='16'>
                    <rect width='16' height='16' fill='#D9D9D9' />
                  </mask>
                  <g mask='url(#mask0_6530_5298)'>
                    <path d='M6.36641 12.0001L2.56641 8.20007L3.51641 7.25007L6.36641 10.1001L12.4831 3.9834L13.4331 4.9334L6.36641 12.0001Z' fill='#213459' />
                  </g>
                </svg>
              </div>
            </div>
            <p className='text-[#213459] desktopBodyRegM '>{item}</p>
          </li>
        );
      })}
    </ul>
  );
}
