import React from 'react'
import { Input } from '../src'

export default {
  title: 'Demo/Input',
  component: Input
}

export const Default = () => (
  <>
    <Input id='id' />
    <Input id='id' warning />
    <Input id='id' error />
    <Input id='id' valid />
  </>
)

export const Placeholder = () => (
  <>
    <Input id='id' placeholder='This is a placeholder' />
    <Input
      id='id'
      placeholder='This is a placeholder'
      warning='This is a warning'
    />
    <Input
      id='id'
      placeholder='This is a placeholder'
      error='This is an error'
    />
    <Input id='id' placeholder='This is a placeholder' valid />
  </>
)

export const SubLabel = () => (
  <>
    <Input id='id' subLabel='This is a sub label' />
    <Input id='id' subLabel='This is a sub label' warning='This is a warning' />
    <Input id='id' subLabel='This is a sub label' error='This is an error' />
    <Input id='id' subLabel='This is a sub label' valid />
  </>
)

export const Content = () => (
  <>
    <Input id='id' value='This is some input' />
    <Input id='id' value='This is some input' warning='This is a warning' />
    <Input id='id' value='This is some input' error='This is an error' />
    <Input id='id' value='This is some input' valid />
  </>
)

export const Disabled = () => (
  <>
    <Input id='id' disabled />
    <Input id='id2' disabled warning='This is a warning' />
    <Input id='id3' disabled error='This is an error' />
    <Input id='id4' disabled valid />
  </>
)

export const ContentDisabled = () => (
  <>
    <Input id='id' value='This is some input' disabled />
    <Input
      id='id2'
      value='This is some input'
      disabled
      warning='This is a warning'
    />
    <Input
      id='id3'
      value='This is some input'
      disabled
      error='This is an error'
    />
    <Input id='id4' value='This is some input' disabled valid />
  </>
)

export const Loading = () => (
  <>
    <Input id='id' loading />
    <Input id='id' loading value='This  is some input' />
    <Input id='id' loading placeholder='This is a placeholder' />
    <Input id='id' loading subLabel='This is a placeholder' />
    <Input id='id' loading error />
  </>
)

export const Types = () => (
  <>
    <Input id='id' type='button' />
    <Input id='id' type='checkbox' />
    <Input id='id' type='color' />
    <Input id='id' type='date' />
    <Input id='id' type='datetime-local' />
    <Input id='id' type='email' />
    <Input id='id' type='file' />
    <Input id='id' type='hidden' />
    <Input id='id' type='image' />
    <Input id='id' type='month' />
    <Input id='id' type='number' />
    <Input id='id' type='password' />
    <Input id='id' type='radio' />
    <Input id='id' type='range' />
    <Input id='id' type='reset' />
    <Input id='id' type='search' />
    <Input id='id' type='submit' />
    <Input id='id' type='tel' />
    <Input id='id' type='text' />
    <Input id='id' type='time' />
    <Input id='id' type='url' />
    <Input id='id' type='week' />
  </>
)
