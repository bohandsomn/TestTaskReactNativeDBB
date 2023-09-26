import { ReactNode } from 'react'

export interface INotification {
    info(message: string): INotificationId
    info(message: string, options: Partial<INotificationOptionsWithoutMessage>): INotificationId
    info(options: Partial<INotificationOptions>): INotificationId

    success(message: string): INotificationId
    success(message: string, options: Partial<INotificationOptionsWithoutMessage>): INotificationId
    success(options: Partial<INotificationOptions>): INotificationId

    pending(message: string): INotificationId
    pending(message: string, options: Partial<INotificationOptionsWithoutMessage>): INotificationId
    pending(options: Partial<INotificationOptions>): INotificationId

    fail(message: string): INotificationId
    fail(message: string, options: Partial<INotificationOptionsWithoutMessage>): INotificationId
    fail(options: Partial<INotificationOptions>): INotificationId

    broadcast(messages: string[], options?: Partial<IBroadcastNotificationOptions>): void

    close(id: INotificationId): void
}

export type INotificationId = string | number

export interface INotificationOptions {
    message: ReactNode
    duration: number
    placement: Placement
}

export interface IBroadcastNotificationOptions {
    duration: number
    placement: Placement
    type: NotificationType
}

export interface INotificationOptionsWithoutMessage extends Omit<INotificationOptions, 'message'> { }

export interface IGetColorsDto {
    type: NotificationType
}

export interface IGetColorsResultDto {
    textColor: string
    bgColor: string
}

export enum Placement {
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM = "bottom",
    TOP = "top",
    TOP_RIGHT = "top-right",
    TOP_LEFT = "top-left",
    BOTTOM_LEFT = "bottom-left",
}

export enum NotificationType {
    INFO,
    SUCCESS,
    PENDING,
    FAIL,
}