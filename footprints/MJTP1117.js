// TH Angled Power Switch Footprint
// Uses OS102011MA1QN1 Switch

module.exports = {
  params: {
    designator: 'B', // for button
    from: undefined,
    to: undefined
  },
  body: p => `
    (module SW_Tactile_SPST_Angled_PTS645Vx39-2LFS (layer F.Cu) (tedit 5A02FE31)
    
    ${p.at /* parametric position */}

    ${'' /* footprint reference */}
    (fp_text reference RST (at 2.25 1.68) (layer F.SilkS)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value SW_Tactile_SPST_Angled_PTS645Vx39-2LFS (at 2.25 5.38988) (layer F.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_line (start 0.5 -3.85) (end 0.5 -2.59) (layer F.Fab) (width 0.1))
    (fp_line (start 4 -3.85) (end 4 -2.59) (layer F.Fab) (width 0.1))
    (fp_line (start 0.5 -3.85) (end 4 -3.85) (layer F.Fab) (width 0.1))
    (fp_text user %R (at 2.25 1.68) (layer F.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_line (start -1.09 0.97) (end -1.09 1.2) (layer F.SilkS) (width 0.12))
    (fp_line (start 5.7 4.2) (end 5.7 0.86) (layer F.Fab) (width 0.1))
    (fp_line (start -1.5 4.2) (end -1.2 4.2) (layer F.Fab) (width 0.1))
    (fp_line (start -1.2 0.86) (end 5.7 0.86) (layer F.Fab) (width 0.1))
    (fp_line (start 6 4.2) (end 6 -2.59) (layer F.Fab) (width 0.1))
    (fp_line (start -2.5 -2.8) (end 7.05 -2.8) (layer F.CrtYd) (width 0.05))
    (fp_line (start 7.05 -2.8) (end 7.05 4.45) (layer F.CrtYd) (width 0.05))
    (fp_line (start 7.05 4.45) (end -2.5 4.45) (layer F.CrtYd) (width 0.05))
    (fp_line (start -2.5 4.45) (end -2.5 -2.8) (layer F.CrtYd) (width 0.05))
    (fp_line (start -1.61 -2.7) (end 6.11 -2.7) (layer F.SilkS) (width 0.12))
    (fp_line (start 6.11 -2.7) (end 6.11 1.2) (layer F.SilkS) (width 0.12))
    (fp_line (start -1.61 4.31) (end -1.09 4.31) (layer F.SilkS) (width 0.12))
    (fp_line (start -1.61 -2.7) (end -1.61 1.2) (layer F.SilkS) (width 0.12))
    (fp_line (start -1.5 -2.59) (end 6 -2.59) (layer F.Fab) (width 0.1))
    (fp_line (start -1.5 4.2) (end -1.5 -2.59) (layer F.Fab) (width 0.1))
    (fp_line (start 5.7 4.2) (end 6 4.2) (layer F.Fab) (width 0.1))
    (fp_line (start -1.2 4.2) (end -1.2 0.86) (layer F.Fab) (width 0.1))
    (fp_line (start 5.59 0.97) (end 5.59 1.2) (layer F.SilkS) (width 0.12))
    (fp_line (start -1.09 3.8) (end -1.09 4.31) (layer F.SilkS) (width 0.12))
    (fp_line (start -1.61 3.8) (end -1.61 4.31) (layer F.SilkS) (width 0.12))
    (fp_line (start 5.05 0.97) (end 5.59 0.97) (layer F.SilkS) (width 0.12))
    (fp_line (start 5.59 3.8) (end 5.59 4.31) (layer F.SilkS) (width 0.12))
    (fp_line (start 5.59 4.31) (end 6.11 4.31) (layer F.SilkS) (width 0.12))
    (fp_line (start 6.11 3.8) (end 6.11 4.31) (layer F.SilkS) (width 0.12))
    (fp_line (start -1.09 0.97) (end -0.55 0.97) (layer F.SilkS) (width 0.12))
    (fp_line (start 0.55 0.97) (end 3.95 0.97) (layer F.SilkS) (width 0.12))

    ${'' /* footprint reference */}
    (pad "" thru_hole circle (at 5.76 2.49) (size 2.1 2.1) (drill 1.3) (layers *.Cu *.Mask))
    (pad 2 thru_hole circle (at 4.5 0) (size 1.75 1.75) (drill 0.99) (layers *.Cu *.Mask) ${p.to.str})
    (pad 1 thru_hole circle (at 0 0) (size 1.75 1.75) (drill 0.99) (layers *.Cu *.Mask) ${p.from.str})
    (pad "" thru_hole circle (at -1.25 2.49) (size 2.1 2.1) (drill 1.3) (layers *.Cu *.Mask))
  )
  `
}