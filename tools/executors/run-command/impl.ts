import { commandSync } from 'execa';
import type { ExecutorContext } from '@nrwl/devkit';

export interface RunCommandExecutorOptions {
  command: string;
  cwd?: string;
}

export default async function runCommandExecutor(
  options: RunCommandExecutorOptions,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  commandSync(options.command, {
    cwd: options.cwd,
    stdio: [process.stdin, process.stdout, 'pipe'],
  });

  return { success: true };
}
