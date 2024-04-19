import React from 'react'
import Buttons from '@/components/UI/Buttons'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import Text from '@/components/UI/Text'
import Title from '@/components/UI/Title'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function ContentImage({ data }) {
  const isReversed = data?.variant === 'reversed'
  console.log(data)
  return (
    <Section
      settings={data?.settings}
      className="h-screen overflow-hidden bg-[#EEF6FF] py-20 lg:py-32"
    >
      <Container className="max-w-7xl">
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-10',
            { 'md:flex-row-reverse': isReversed },
            { 'md:flex-row': !isReversed },
          )}
        >
          <div className="relative flex h-full  lg:w-1/2">
            <div className="absolute -right-[10rem] bottom-0 h-[20rem] w-[38rem] bg-blue-500">
              22
            </div>
            <div>
              {data?.photo?.image && (
                <Image
                  src={data?.photo?.image}
                  alt={data?.photo?.alt}
                  className=" w-full"
                />
              )}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="mx-auto max-w-2xl">
              {data?.title && data?.title2 && (
                <div className="flex gap-2 ">
                  <Title Tag="h2" variant="hero" className="!text-black">
                    {data?.title}
                  </Title>
                  <Title className="!text-blue-500" Tag="h1" variant="hero">
                    {data.title2}
                  </Title>
                </div>
              )}
              {data?.content && (
                <Text className="mt-4 text-black lg:text-lg lg:leading-relaxed">
                  {data?.content}
                </Text>
              )}
              {data?.buttons && (
                <Buttons buttons={data?.buttons} className="mt-4" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
