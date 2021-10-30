// SETTINGS AND DEFAULT VALUES
import {ShellCommandsConfiguration} from "./ShellCommandConfiguration";

export type SettingsVersionString = "prior-to-0.7.0" | string;

export interface ShellCommandsPluginSettings {
    settings_version: SettingsVersionString;
    default_shells: IPlatformSpecificString;
    working_directory: string;
    preview_variables_in_command_palette: boolean;
    shell_commands: ShellCommandsConfiguration;
    error_message_duration: number;
    notification_message_duration: number;

    // Legacy:
    /** @deprecated Use shell_commands object instead of this array. From now on, this array can be used only for migrating old configuration to shell_commands.*/
    commands?: string[];
}

export const DEFAULT_SETTINGS: ShellCommandsPluginSettings = {
    settings_version: "prior-to-0.7.0", // This will be substituted by ShellCommandsPlugin.saveSettings() when the settings are saved.
    default_shells: {},
    working_directory: "",
    preview_variables_in_command_palette: true,
    shell_commands: {},
    error_message_duration: 20,
    notification_message_duration: 10,
}

/**
 * All OSes supported by the Shell commands plugin.
 * Values are borrowed from NodeJS.Platform.
 * "darwin" = Macintosh.
 *
 * This type must be synchronous to IOperatingSystemSpecificString interface.
 *
 * @see NodeJS.Platform
 */
export type PlatformId = "darwin" | "linux" | "win32";

export const PlatformNames: IPlatformSpecificString = {
    darwin: "Macintosh",
    linux: "Linux",
    win32: "Windows",
};

/**
 * All OSes supported by the Shell commands plugin.
 * Values are borrowed from NodeJS.Platform.
 *
 * This interface must be synchronous to OperatingSystemName type.
 *
 * @see NodeJS.Platform
 */
export interface IPlatformSpecificString {
    /** This is Macintosh */
    darwin?: string,
    linux?: string,
    win32?: string,
}

export interface IPlatformSpecificStringWithDefault extends IPlatformSpecificString{
    default: string,
}

export const PlatformShells = {
    darwin: {
        "/bin/bash": "Bash",
        "/bin/zsh": "Zsh (Z shell)"
    },
    linux: {
        "/bin/bash": "Bash",
        "/bin/zsh": "Zsh (Z shell)"
    },
    win32: {
        "pwsh.exe": "PowerShell Core",
        "PowerShell.exe": "PowerShell 5",
        "CMD.EXE": "cmd.exe",
    }
}
