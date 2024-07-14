import Chart from 'chart.js/auto'
import { useEffect, useRef, useState } from 'react'

export interface ChartLineProps {
  labels: any[]
  datasets: {
    fill: boolean;
    tension: number;
    borderWidth: number;
    label: string;
    data: number[];
  }[]
}

function ChartLine(props: ChartLineProps) {
  const ref = useRef<HTMLCanvasElement>(null)
  const [chart, setChart] = useState<Chart>()

  useEffect(() => {
    if (chart) {
      chart.data.datasets = props.datasets
      chart.data.labels = props.labels

      chart.update()
    }
  }, [props.datasets, props.labels])

  useEffect(() => {
    if (ref.current) {
      const context = ref.current.getContext('2d')

      if (context) {
        context.canvas.height = 200

        const chart = new Chart(context, {
          type: 'line',
          
          data: {
            labels: props.labels,
            datasets: props.datasets
          },
          options: {
            animation: false,
            responsive: true,
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false
                },
                beginAtZero: true,
              }
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        })

        setChart(chart)

        return () => chart.destroy()
      }
    }
  }, [])

  return (
    <div className='flex-1'>
      <canvas className='w-full' ref={ref}></canvas>
    </div>
  )
}

export default ChartLine