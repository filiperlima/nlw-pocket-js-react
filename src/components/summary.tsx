import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">September 15th to 21st</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Register goal
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>
      </div>

      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>
          You completed <span className="text-zinc-100">8</span> out of{' '}
          <span className="text-zinc-100">15</span> this week.
        </span>
        <span>53%</span>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Meditate
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Swim
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Exercise
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Eat well
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">You week</h2>

        <div className="flex flex-col gap-4">
          <h3>
            Sunday{' '}
            <span className="text-zinc-400 text-xs">(September 15th)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex item-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                You completed "
                <span className="text-zinc-100">Wake up early</span>" at{' '}
                <span className="text-zinc-100">08:03</span>
              </span>
            </li>

            <li className="flex item-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                You completed "<span className="text-zinc-100">Pray</span>" at{' '}
                <span className="text-zinc-100">22:00</span>
              </span>
            </li>

            <li className="flex item-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                You completed "<span className="text-zinc-100">Exercise</span>"
                at <span className="text-zinc-100">09:00</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3>
            Monday{' '}
            <span className="text-zinc-400 text-xs">(September 16th)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex item-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                You completed "
                <span className="text-zinc-100">Wake up early</span>" at{' '}
                <span className="text-zinc-100">08:03</span>
              </span>
            </li>

            <li className="flex item-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                You completed "<span className="text-zinc-100">Pray</span>" at{' '}
                <span className="text-zinc-100">22:00</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3>
            Tuesday{' '}
            <span className="text-zinc-400 text-xs">(September 16th)</span>
          </h3>

          <ul className="flex flex-col gap-3">
            <li className="flex item-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                You completed "
                <span className="text-zinc-100">Wake up early</span>" at{' '}
                <span className="text-zinc-100">08:03</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
