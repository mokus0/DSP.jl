var documenterSearchIndex = {"docs": [

{
    "location": "contents.html#",
    "page": "Contents",
    "title": "Contents",
    "category": "page",
    "text": ""
},

{
    "location": "contents.html#Welcome-to-DSP.jl\'s-documentation!-1",
    "page": "Contents",
    "title": "Welcome to DSP.jl\'s documentation!",
    "category": "section",
    "text": "Contents:DSP.jl provides a number of common DSP routines in Julia. So far, the following submodules are implemented:Pages = [\"periodograms.md\",\n    \"estimation.md\",\n    \"windows.md\",\n    \"filters.md\",\n    \"util.md\",\n    \"index.md\",\n]"
},

{
    "location": "periodograms.html#",
    "page": "Periodograms - periodogram estimation",
    "title": "Periodograms - periodogram estimation",
    "category": "page",
    "text": ""
},

{
    "location": "periodograms.html#DSP.Periodograms.arraysplit",
    "page": "Periodograms - periodogram estimation",
    "title": "DSP.Periodograms.arraysplit",
    "category": "function",
    "text": "arraysplit(s, n, m)\n\nSplit an array into arrays of length n with overlapping regions of length m. Iterating or indexing the returned AbstractVector always yields the same Vector with different contents.\n\n\n\n"
},

{
    "location": "periodograms.html#DSP.Periodograms.periodogram-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T<:Number",
    "page": "Periodograms - periodogram estimation",
    "title": "DSP.Periodograms.periodogram",
    "category": "method",
    "text": "periodogram(s; onesided=eltype(s)<:Real, nfft=nextfastfft(n), fs=1, window=nothing)\n\nComputes periodogram of a signal by FFT and returns a Periodogram object.\n\nFor real signals, the two-sided periodogram is symmetric and this function returns a one-sided (real only) periodogram by default. A two-sided periodogram can be obtained by setting onesided=false.\n\nnfft specifies the number of points to use for the Fourier transform. If length(s) < nfft, then the input is padded with zeros. By default, nfft is the closest size for which the Fourier transform can be computed with maximal efficiency.\n\nfs is the sample rate of the original signal, and window is an optional window function or vector to be applied to the original signal before computing the Fourier transform. The computed periodogram is normalized so that the area under the periodogram is equal to the uncentered variance (or average power) of the original signal.\n\n\n\n"
},

{
    "location": "periodograms.html#DSP.Periodograms.welch_pgram",
    "page": "Periodograms - periodogram estimation",
    "title": "DSP.Periodograms.welch_pgram",
    "category": "function",
    "text": "welch_pgram(s, n=div(length(s), 8), noverlap=div(n, 2); onesided=eltype(s)<:Real, nfft=nextfastfft(n), fs=1, window=nothing)\n\nComputes the Welch periodogram of a signal s based on segments with n samples with overlap of noverlap samples, and returns a Periodogram object. For a Bartlett periodogram, set noverlap=0. See periodogram for description of optional keyword arguments.\n\n\n\n"
},

{
    "location": "periodograms.html#DSP.Periodograms.mt_pgram",
    "page": "Periodograms - periodogram estimation",
    "title": "DSP.Periodograms.mt_pgram",
    "category": "function",
    "text": "mt_pgram(s; onesided=eltype(s)<:Real, nfft=nextfastfft(n), fs=1, nw=4, ntapers=iceil(2nw)-1, window=dpss(length(s), nw, ntapers))\n\nComputes the multitaper periodogram of a signal s.\n\nIf window is not specified, the signal is tapered with ntapers discrete prolate spheroidal sequences with time-bandwidth product nw. Each sequence is equally weighted; adaptive multitaper is not (yet) supported.\n\nIf window is specified, each column is applied as a taper. The sum of periodograms is normalized by the total sum of squares of window.\n\nSee also: dpss\n\n\n\n"
},

{
    "location": "periodograms.html#DSP.Periodograms.spectrogram",
    "page": "Periodograms - periodogram estimation",
    "title": "DSP.Periodograms.spectrogram",
    "category": "function",
    "text": "spectrogram(s, n=div(length(s), 8), noverlap=div(n, 2); onesided=eltype(s)<:Real, nfft=nextfastfft(n), fs=1, window=nothing)\n\nComputes the spectrogram of a signal s based on segments with n samples with overlap of noverlap samples, and returns a Spectrogram object. See periodogram for description of optional keyword arguments.\n\n\n\n"
},

{
    "location": "periodograms.html#DSP.Periodograms.stft",
    "page": "Periodograms - periodogram estimation",
    "title": "DSP.Periodograms.stft",
    "category": "function",
    "text": "stft(s, n=div(length(s), 8), noverlap=div(n, 2); onesided=eltype(s)<:Real, nfft=nextfastfft(n), fs=1, window=nothing)\n\nComputes the STFT of a signal s based on segments with n samples with overlap of noverlap samples, and returns a matrix containing the STFT coefficients. See periodogram for description of optional keyword arguments.\n\n\n\n"
},

{
    "location": "periodograms.html#DSP.Periodograms.periodogram-Union{Tuple{AbstractArray{T,2}}, Tuple{T}} where T<:Real",
    "page": "Periodograms - periodogram estimation",
    "title": "DSP.Periodograms.periodogram",
    "category": "method",
    "text": "periodogram(s::AbstractMatrix; nfft=nextfastfft(size(s)), fs=1, radialsum=false, radialavg=false)\n\nComputes periodogram of a 2-d signal by FFT and returns a Periodogram2 object.\n\nReturns a 2-d periodogram by default. A radially summed or averaged periodogram is returned as a Periodogram object if radialsum or  radialavg is true, respectively.\n\nnfft specifies the number of points to use for the Fourier transform. If size(s) < nfft, then the input is padded with zeros. By default, nfft is the closest size for which the Fourier transform can be computed with maximal efficiency. fs is the sample rate of the original signal in both directions.\n\nFor radialsum=true the value of power[k] is proportional to frac1Nsum_kleq kk+1 Xk^2. For radialavg=true it is proportional to frac1N kleq kk+1 sum_kleq kk+1 Xk^2. The computation of |k\'| takes into account non-square signals by scaling the coordinates of the wavevector accordingly.\n\n\n\n"
},

{
    "location": "periodograms.html#DSP.Periodograms.freq",
    "page": "Periodograms - periodogram estimation",
    "title": "DSP.Periodograms.freq",
    "category": "function",
    "text": "freq(p)\n\nReturns the frequency bin centers for a given Periodogram or Spectrogram object.\n\nReturns a tuple of frequency bin centers for a given Periodogram2 object.\n\nSee also: fftfreq, rfftfreq\n\n\n\n"
},

{
    "location": "periodograms.html#DSP.Periodograms.power",
    "page": "Periodograms - periodogram estimation",
    "title": "DSP.Periodograms.power",
    "category": "function",
    "text": "power(p)\n\nFor a Periodogram, returns the computed power at each frequency as a Vector.\n\nFor a Spectrogram, returns the computed power at each frequency and time bin as a Matrix. Dimensions are frequency × time.\n\n\n\n"
},

{
    "location": "periodograms.html#Base.Libc.time",
    "page": "Periodograms - periodogram estimation",
    "title": "Base.Libc.time",
    "category": "function",
    "text": "time(p)\n\nReturns the time bin centers for a given Spectrogram object.\n\n\n\n"
},

{
    "location": "periodograms.html#Periodograms-periodogram-estimation-1",
    "page": "Periodograms - periodogram estimation",
    "title": "Periodograms - periodogram estimation",
    "category": "section",
    "text": "arraysplit\nperiodogram(s::AbstractVector{T}) where T <: Number\nwelch_pgram\nmt_pgram\nspectrogram\nstft\nperiodogram(s::AbstractMatrix{T}) where T <: Real\nfreq\npower\ntime"
},

{
    "location": "estimation.html#",
    "page": "Estimation - parametric estimation functions",
    "title": "Estimation - parametric estimation functions",
    "category": "page",
    "text": ""
},

{
    "location": "estimation.html#DSP.Estimation.esprit",
    "page": "Estimation - parametric estimation functions",
    "title": "DSP.Estimation.esprit",
    "category": "function",
    "text": "esprit(x::AbstractArray, M::Integer, p::Integer, Fs::Real=1.0)\n\nESPRIT [Roy1986] algorithm for frequency estimation. Estimation of Signal Parameters via Rotational Invariance Techniques\n\nGiven length N signal \"x\" that is the sum of p sinusoids of unknown frequencies, estimate and return an array of the p frequencies.\n\nArguments\n\nx::AbstractArray: complex length N signal array\nM::Integer: size of correlation matrix, must be <= N.     The signal subspace is computed from the SVD of an M x (N-M+1) signal matrix     formed from N-M+1 length-M shifts of the signal x in its columns.     For best performance for 1 sinusoid, use M = (N+1)/3 (according to van der Veen and Leus).     For faster execution (due to smaller SVD), use small M or small N-M\np::Integer: number of sinusoids to estimate.\nFs::Float64: sampling frequency, in Hz.\n\nReturns\n\nlength p real array of frequencies in units of Hz.\n\n[Roy1986]: R Roy, A Paulraj and T Kailath, ESPRIT - A subspace approach to estimation of parameters of cisoids in noise, IEEE Trans. Acoustics, Speech, Signal Process., 34, 1340-1342 (1986). url.\n\n\n\n"
},

{
    "location": "estimation.html#Estimation-parametric-estimation-functions-1",
    "page": "Estimation - parametric estimation functions",
    "title": "Estimation - parametric estimation functions",
    "category": "section",
    "text": "esprit"
},

{
    "location": "windows.html#",
    "page": "Windows - window functions",
    "title": "Windows - window functions",
    "category": "page",
    "text": ""
},

{
    "location": "windows.html#DSP.Windows.rect",
    "page": "Windows - window functions",
    "title": "DSP.Windows.rect",
    "category": "function",
    "text": "rect(n)\n\nRectangular window function of length n.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.hanning",
    "page": "Windows - window functions",
    "title": "DSP.Windows.hanning",
    "category": "function",
    "text": "hanning(n)\n\nHanning window of length n.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.hamming",
    "page": "Windows - window functions",
    "title": "DSP.Windows.hamming",
    "category": "function",
    "text": "hamming(n)\n\nHamming window of length n.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.tukey",
    "page": "Windows - window functions",
    "title": "DSP.Windows.tukey",
    "category": "function",
    "text": "tukey(n, alpha)\n\nTukey window of length n, parameterized by alpha. For alpha = 0, the window is equivalent to a rectangular window. For alpha = 1, the window is a Hann window.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.cosine",
    "page": "Windows - window functions",
    "title": "DSP.Windows.cosine",
    "category": "function",
    "text": "cosine(n)\n\nCosine window of length n. Also called the sine window for obvious reasons.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.lanczos",
    "page": "Windows - window functions",
    "title": "DSP.Windows.lanczos",
    "category": "function",
    "text": "lanczos(n)\n\nLanczos window of length n.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.triang",
    "page": "Windows - window functions",
    "title": "DSP.Windows.triang",
    "category": "function",
    "text": "triang(n)\n\nTriangular window of length n.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.bartlett",
    "page": "Windows - window functions",
    "title": "DSP.Windows.bartlett",
    "category": "function",
    "text": "bartlett(n)\n\nBartlett window of length n.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.gaussian",
    "page": "Windows - window functions",
    "title": "DSP.Windows.gaussian",
    "category": "function",
    "text": "gaussian(n, sigma)\n\nGaussian window of length n parameterized by the standard deviation sigma.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.bartlett_hann",
    "page": "Windows - window functions",
    "title": "DSP.Windows.bartlett_hann",
    "category": "function",
    "text": "bartlett_hann(n)\n\nBartlett-Hann window of length n.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.blackman",
    "page": "Windows - window functions",
    "title": "DSP.Windows.blackman",
    "category": "function",
    "text": "blackman(n)\n\n\"Exact\" Blackman window, alpha = 0.16.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.kaiser",
    "page": "Windows - window functions",
    "title": "DSP.Windows.kaiser",
    "category": "function",
    "text": "kaiser(n, alpha)\n\nKaiser window of length n parameterized by alpha.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.dpss",
    "page": "Windows - window functions",
    "title": "DSP.Windows.dpss",
    "category": "function",
    "text": "dpss(n, nw, ntapers=iceil(2*nw)-1)\n\nThe first ntapers discrete prolate spheroid sequences (Slepian tapers) as an n × ntapers matrix. The signs of the tapers follow the convention that the first element of the skew-symmetric (odd) tapers is positive. The time-bandwidth product is given by nw.\n\n\n\n"
},

{
    "location": "windows.html#DSP.Windows.dpsseig",
    "page": "Windows - window functions",
    "title": "DSP.Windows.dpsseig",
    "category": "function",
    "text": "dpsseig(A, nw)\n\nEigenvalues of the DPSS matrix, representing the ratios of the power within the main lobe to the total power (main and sidelobes). A is the output of dpss, and nw is the time-bandwidth product provided to dpss as input.\n\n\n\n"
},

{
    "location": "windows.html#Windows-window-functions-1",
    "page": "Windows - window functions",
    "title": "Windows - window functions",
    "category": "section",
    "text": "rect\nhanning\nhamming\ntukey\ncosine\nlanczos\ntriang\nbartlett\ngaussian\nbartlett_hann\nblackman\nkaiser\ndpss\ndpsseig"
},

{
    "location": "filters.html#",
    "page": "Filters - filter design and filtering",
    "title": "Filters - filter design and filtering",
    "category": "page",
    "text": ""
},

{
    "location": "filters.html#Filters-filter-design-and-filtering-1",
    "page": "Filters - filter design and filtering",
    "title": "Filters - filter design and filtering",
    "category": "section",
    "text": "DSP.jl differentiates between filter coefficients and stateful filters. Filter coefficient objects specify the response of the filter in one of several standard forms. Stateful filter objects carry the state of the filter together with filter coefficients in an implementable form (PolynomialRatio, Biquad, or SecondOrderSections). When invoked on a filter coefficient object, filt does not preserve state."
},

{
    "location": "filters.html#DSP.Filters.ZeroPoleGain",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.ZeroPoleGain",
    "category": "type",
    "text": "ZeroPoleGain(z, p, k)\n\nFilter representation in terms of zeros z, poles p, and gain k:\n\nH(x) = kfrac(x - verbz1) ldots (x - verbzend)(x - verbp1) ldots (x - verbpend)\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.PolynomialRatio",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.PolynomialRatio",
    "category": "type",
    "text": "PolynomialRatio(b, a)\n\nFilter representation in terms of the coefficients of the numerator b and denominator a of the transfer function:\n\nH(s) = fracverbb1 s^n-1 + ldots + verbbnverba1 s^n-1 + ldots + verban\n\nor equivalently:\n\nH(z) = fracverbb1 + ldots + verbbn z^-n+1verba1 + ldots + verban z^-n+1\n\nb and a may be specified as Polynomial objects or vectors ordered from highest power to lowest.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.Biquad",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.Biquad",
    "category": "type",
    "text": "Biquad(b0, b1, b2, a1, a2)\n\nFilter representation in terms of the transfer function of a single second-order section given by:\n\nH(s) = fracverbb0 s^2+verbb1 s+verbb2s^2+verba1 s + verba2\n\nor equivalently:\n\nH(z) = fracverbb0+verbb1 z^-1+verbb2 z^-21+verba1 z^-1 + verba2 z^-2\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.SecondOrderSections",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.SecondOrderSections",
    "category": "type",
    "text": "SecondOrderSections(biquads, gain)\n\nFilter representation in terms of a cascade of second-order sections and gain. biquads must be specified as a vector of Biquads.\n\n\n\n"
},

{
    "location": "filters.html#coefficient-objects-1",
    "page": "Filters - filter design and filtering",
    "title": "Filter coefficient objects",
    "category": "section",
    "text": "DSP.jl supports common filter representations. Filter coefficients can be converted from one type to another using convert.ZeroPoleGain\nPolynomialRatio\nBiquad\nSecondOrderSections"
},

{
    "location": "filters.html#DSP.Filters.DF2TFilter",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.DF2TFilter",
    "category": "type",
    "text": "DF2TFilter(coef[, si])\n\nConstruct a stateful direct form II transposed filter with coefficients coef. si is an optional array representing the initial filter state (defaults to zeros). If f is a PolynomialRatio, Biquad, or SecondOrderSections, filtering is implemented directly. If f is a ZeroPoleGain object, it is first converted to a SecondOrderSections object.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.FIRFilter",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.FIRFilter",
    "category": "type",
    "text": "FIRFilter(h[, ratio])\n\nConstruct a stateful FIRFilter object from the vector of filter taps h. ratio is an optional rational integer which specifies the input to output sample rate relationship (e.g. 147//160 for converting recorded audio from 48 KHz to 44.1 KHz).\n\n\n\nFIRFilter(h, rate[, Nϕ])\n\nReturns a polyphase FIRFilter object from the vector of filter taps h. rate is a floating point number that specifies the input to output sample-rate relationship fracfs_outfs_in. Nϕ is an optional parameter which specifies the number of phases created from h. Nϕ defaults to 32.\n\n\n\n"
},

{
    "location": "filters.html#stateful-filter-objects-1",
    "page": "Filters - filter design and filtering",
    "title": "Stateful filter objects",
    "category": "section",
    "text": "DF2TFilterDSP.jl\'s FIRFilter type maintains state between calls to filt, allowing you to filter a signal of indefinite length in RAM-friendly chunks. FIRFilter contains nothing more that the state of the filter, and a FIRKernel. There are five different kinds of FIRKernel for single rate, up-sampling, down-sampling, rational resampling, and arbitrary sample-rate conversion. You need not specify the type of kernel. The FIRFilter constructor selects the correct kernel based on input parameters.FIRFilter"
},

{
    "location": "filters.html#Base.DSP.filt",
    "page": "Filters - filter design and filtering",
    "title": "Base.DSP.filt",
    "category": "function",
    "text": "filt(f, x[, si])\n\nApply filter or filter coefficients f along the first dimension of array x. If f is a filter coefficient object, si is an optional array representing the initial filter state (defaults to zeros). If f is a PolynomialRatio, Biquad, or SecondOrderSections, filtering is implemented directly. If f is a ZeroPoleGain object, it is first converted to a SecondOrderSections object.  If f is a Vector, it is interpreted as an FIR filter, and a naïve or FFT-based algorithm is selected based on the data and filter length.\n\n\n\n"
},

{
    "location": "filters.html#Base.DSP.filt!",
    "page": "Filters - filter design and filtering",
    "title": "Base.DSP.filt!",
    "category": "function",
    "text": "filt!(out, f, x[, si])\n\nSame as filt() but writes the result into the out argument, which may alias the input x to modify it in-place.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.filtfilt",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.filtfilt",
    "category": "function",
    "text": "filtfilt(coef, x)\n\nFilter x in the forward and reverse directions using filter coefficients coef. The initial state of the filter is computed so that its response to a step function is steady state. Before filtering, the data is extrapolated at both ends with an odd-symmetric extension of length 3*(max(length(b), length(a))-1).\n\nBecause filtfilt applies the given filter twice, the effective filter order is twice the order of coef. The resulting signal has zero phase distortion.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.fftfilt",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.fftfilt",
    "category": "function",
    "text": "fftfilt(h, x)\n\nApply FIR filter taps h along the first dimension of array x using an FFT-based overlap-save algorithm.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.resample",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.resample",
    "category": "function",
    "text": "resample(x, rate[, coef])\n\nResample x at rational or arbitrary rate. coef is an optional vector of FIR filter taps. If coef is not provided, the taps will be computed using a Kaiser window.\n\nInternally, resample uses a polyphase FIRFilter object, but performs additional operations to make resampling a signal easier. It compensates for for the FIRFilter\'s delay (ramp-up), and appends zeros to x. The result is that when the input and output signals are plotted on top of each other, they correlate very well, but one signal will have more samples that the other.\n\n\n\n"
},

{
    "location": "filters.html#Filter-application-1",
    "page": "Filters - filter design and filtering",
    "title": "Filter application",
    "category": "section",
    "text": "filt\nfilt!\nfiltfilt\nfftfilt\nresample"
},

{
    "location": "filters.html#DSP.Filters.analogfilter",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.analogfilter",
    "category": "function",
    "text": "analogfilter(responsetype, designmethod)\n\nConstruct an analog filter. See below for possible response and filter types.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.digitalfilter",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.digitalfilter",
    "category": "function",
    "text": "digitalfilter(responsetype, designmethod)\n\nConstruct a digital filter. See below for possible response and filter types.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.iirnotch",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.iirnotch",
    "category": "function",
    "text": "iirnotch(Wn, bandwidth[; fs])\n\nSecond-order digital IIR notch filter at frequency Wn with bandwidth bandwidth. If fs is not specified, Wn is interpreted as a normalized frequency in half-cycles/sample.\n\n\n\n"
},

{
    "location": "filters.html#Filter-design-1",
    "page": "Filters - filter design and filtering",
    "title": "Filter design",
    "category": "section",
    "text": "Most analog and digital filters are constructed by composing response types, which determine the frequency response of the filter, with design methods, which determine how the filter is constructed.analogfilter\ndigitalfilterFor some filters, the design method inherently implies a response type. Such filters are documented below.iirnotch"
},

{
    "location": "filters.html#DSP.Filters.Lowpass",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.Lowpass",
    "category": "type",
    "text": "Lowpass(Wn[; fs])\n\nLow pass filter with cutoff frequency Wn. If fs is not specified, Wn is interpreted as a normalized frequency in half-cycles/sample.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.Highpass",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.Highpass",
    "category": "type",
    "text": "Highpass(Wn[; fs])\n\nHigh pass filter with cutoff frequency Wn. If fs is not specified, Wn is interpreted as a normalized frequency in half-cycles/sample.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.Bandpass",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.Bandpass",
    "category": "type",
    "text": "Bandpass(Wn1, Wn2[; fs])\n\nBand pass filter with normalized pass band (Wn1, Wn2). If fs is not specified, Wn1 and Wn2 are interpreted as normalized frequencies in half-cycles/sample.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.Bandstop",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.Bandstop",
    "category": "type",
    "text": "Bandstop(Wn1, Wn2[; fs])\n\nBand stop filter with normalized stop band (Wn1, Wn2). If fs is not specified, Wn1 and Wn2 are interpreted as normalized frequencies in half-cycles/sample.\n\n\n\n"
},

{
    "location": "filters.html#response-types-1",
    "page": "Filters - filter design and filtering",
    "title": "Filter response types",
    "category": "section",
    "text": "Lowpass\nHighpass\nBandpass\nBandstop"
},

{
    "location": "filters.html#design-methods-1",
    "page": "Filters - filter design and filtering",
    "title": "Filter design methods",
    "category": "section",
    "text": ""
},

{
    "location": "filters.html#DSP.Filters.Butterworth",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.Butterworth",
    "category": "function",
    "text": "Butterworth(n)\n\nn pole Butterworth filter.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.Chebyshev1",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.Chebyshev1",
    "category": "function",
    "text": "Chebyshev1(n, ripple)\n\nn pole Chebyshev type I filter with ripple dB ripple in the passband.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.Chebyshev2",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.Chebyshev2",
    "category": "function",
    "text": "Chebyshev2(n, ripple)\n\nn pole Chebyshev type II filter with ripple dB ripple in the stopband.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.Elliptic",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.Elliptic",
    "category": "function",
    "text": "Elliptic(n, rp, rs)\n\nn pole elliptic (Cauer) filter with rp dB ripple in the passband and rs dB attentuation in the stopband.\n\n\n\n"
},

{
    "location": "filters.html#IIR-filter-design-methods-1",
    "page": "Filters - filter design and filtering",
    "title": "IIR filter design methods",
    "category": "section",
    "text": "Butterworth\nChebyshev1\nChebyshev2\nElliptic"
},

{
    "location": "filters.html#DSP.Filters.FIRWindow",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.FIRWindow",
    "category": "type",
    "text": "FIRWindow(window; scale=true)\n\nFIR filter design using window window, a vector whose length matches the number of taps in the resulting filter.\n\nIf scale is true (default), the designed FIR filter is scaled so that the following holds:\n\nFor Lowpass and Bandstop filters, the frequency response is unity at 0 (DC).\nFor Highpass filters, the frequency response is unity at the Nyquist frequency.\nFor Bandpass filters, the frequency response is unity in the center of the passband.\n\n\n\nFIRWindow(; transitionwidth, attenuation=60, scale=true)\n\nKaiser window FIR filter design. The required number of taps is calculated based on transitionwidth (in half-cycles/sample) and stopband attenuation (in dB). attenuation defaults to 60 dB.\n\n\n\n"
},

{
    "location": "filters.html#FIR-filter-design-methods-1",
    "page": "Filters - filter design and filtering",
    "title": "FIR filter design methods",
    "category": "section",
    "text": "FIRWindow"
},

{
    "location": "filters.html#DSP.Filters.freqz",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.freqz",
    "category": "function",
    "text": "freqz(filter, w = range(0, stop=π, length=250))\n\nFrequency response of a digital filter at normalised frequency or frequencies w in radians/sample.\n\n\n\nfreqz(filter, hz, fs)\n\nFrequency response of a digital filter at frequency or frequencies hz with sampling rate fs.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.phasez",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.phasez",
    "category": "function",
    "text": "phasez(filter, w = range(0, stop=π, length=250))\n\nPhase response of a digital filter at normalised frequency or frequencies w in radians/sample.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.impz",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.impz",
    "category": "function",
    "text": "impz(filter, n=100)\n\nImpulse response of a digital filter with n points.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.stepz",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.stepz",
    "category": "function",
    "text": "stepz(filter, n=100)\n\nStep response of a digital filter with n points.\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.freqs",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.freqs",
    "category": "function",
    "text": "freqs(filter, w)\n\nFrequency response of an analog filter at normalised frequency or frequencies w in radians/sample.\n\n\n\nfreqs(filter, hz, fs)\n\nFrequency response of an analog filter at frequency or frequencies hz with sampling rate fs.\n\n\n\n"
},

{
    "location": "filters.html#Filter-response-1",
    "page": "Filters - filter design and filtering",
    "title": "Filter response",
    "category": "section",
    "text": "freqz\nphasez\nimpz\nstepz\nfreqs"
},

{
    "location": "filters.html#DSP.Filters.coefb",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.coefb",
    "category": "function",
    "text": "coefb(f)\n\nCoefficients of the numerator of a PolynomialRatio object, highest power first, i.e., the b passed to filt()\n\n\n\n"
},

{
    "location": "filters.html#DSP.Filters.coefa",
    "page": "Filters - filter design and filtering",
    "title": "DSP.Filters.coefa",
    "category": "function",
    "text": "coefa(f)\n\nCoefficients of the denominator of a PolynomialRatio object, highest power first, i.e., the a passed to filt()\n\n\n\n"
},

{
    "location": "filters.html#Miscellaneous-1",
    "page": "Filters - filter design and filtering",
    "title": "Miscellaneous",
    "category": "section",
    "text": "coefb\ncoefa"
},

{
    "location": "filters.html#Examples-1",
    "page": "Filters - filter design and filtering",
    "title": "Examples",
    "category": "section",
    "text": "Construct a 4th order elliptic lowpass filter with normalized cutoff frequency 0.2, 0.5 dB of passband ripple, and 30 dB attentuation in the stopband and extract the coefficients of the numerator and denominator of the transfer function:responsetype = Lowpass(0.2)\ndesignmethod = Elliptic(4, 0.5, 30)\ntf = convert(PolynomialRatio, digitalfilter(responsetype, designmethod))\nnumerator_coefs = coefb(tf)\ndenominator_coefs = coefa(tf)Filter the data in x, sampled at 1000 Hz, with a 4th order Butterworth bandpass filter between 10 and 40 Hz:responsetype = Bandpass(10, 40; fs=1000)\ndesignmethod = Butterworth(4)\nfilt(digitalfilter(responsetype, designmethod), x)Filter the data in x, sampled at 50 Hz, with a 64 tap Hanning window FIR lowpass filter at 5 Hz:responsetype = Lowpass(5; fs=50)\ndesignmethod = FIRWindow(hanning(64))\nfilt(digitalfilter(responsetype, designmethod), x)"
},

{
    "location": "util.html#",
    "page": "Util - utility functions",
    "title": "Util - utility functions",
    "category": "page",
    "text": ""
},

{
    "location": "util.html#DSP.Util.unwrap",
    "page": "Util - utility functions",
    "title": "DSP.Util.unwrap",
    "category": "function",
    "text": "unwrap(m, dim=ndims(m); range=2pi)\n\nAssumes m (along dimension dim) to be a sequences of values that have been wrapped to be inside the given range (centered around zero), and undoes the wrapping by identifying discontinuities. If dim is not given, the last dimension is used.\n\nA common usage is for a phase measurement over time, such as when comparing successive frames of a short-time-fourier-transform, as each frame is wrapped to stay within (-pi, pi].\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.unwrap!",
    "page": "Util - utility functions",
    "title": "DSP.Util.unwrap!",
    "category": "function",
    "text": "unwrap!(m, dim=ndims(m); range=2pi)\n\nIn-place version of unwrap(m, dim, range)\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.hilbert",
    "page": "Util - utility functions",
    "title": "DSP.Util.hilbert",
    "category": "function",
    "text": "hilbert(x)\n\nComputes the analytic representation of x, x_a = x + j hatx, where hatx is the Hilbert transform of x, along the first dimension of x.\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.fftfreq",
    "page": "Util - utility functions",
    "title": "DSP.Util.fftfreq",
    "category": "function",
    "text": "fftfreq(n, fs=1)\n\nReturn discrete fourier transform sample frequencies. The returned Frequencies object is an AbstractVector containing the frequency bin centers at every sample point. fs is the sample rate of the input signal.\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.rfftfreq",
    "page": "Util - utility functions",
    "title": "DSP.Util.rfftfreq",
    "category": "function",
    "text": "rfftfreq(n, fs=1)\n\nReturn discrete fourier transform sample frequencies for use with rfft. The returned Frequencies object is an AbstractVector containing the frequency bin centers at every sample point. fs is the sample rate of the input signal.\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.nextfastfft",
    "page": "Util - utility functions",
    "title": "DSP.Util.nextfastfft",
    "category": "function",
    "text": "nextfastfft(n)\n\nReturn the closest product of 2, 3, 5, and 7 greater than or equal to n. FFTW contains optimized kernels for these sizes and computes Fourier transforms of input that is a product of these sizes faster than for input of other sizes.\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.pow2db",
    "page": "Util - utility functions",
    "title": "DSP.Util.pow2db",
    "category": "function",
    "text": "pow2db(a)\n\nConvert a power ratio to dB (decibel), or 10log_10(a). The inverse of db2pow.\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.amp2db",
    "page": "Util - utility functions",
    "title": "DSP.Util.amp2db",
    "category": "function",
    "text": "amp2db(a)\n\nConvert an amplitude ratio to dB (decibel), or 20 log_10(a)=10log_10(a^2). The inverse of db2amp.\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.db2pow",
    "page": "Util - utility functions",
    "title": "DSP.Util.db2pow",
    "category": "function",
    "text": "db2pow(a)\n\nConvert dB to a power ratio. This function call also be called using a*dB, i.e. 3dB == db2pow(3). The inverse of pow2db.\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.db2amp",
    "page": "Util - utility functions",
    "title": "DSP.Util.db2amp",
    "category": "function",
    "text": "db2amp(a)\n\nConvert dB to an amplitude ratio. This function call also be called using a*dBa, i.e. 3dBa == db2amp(3). The inverse of amp2db.\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.rms",
    "page": "Util - utility functions",
    "title": "DSP.Util.rms",
    "category": "function",
    "text": "rms(s)\n\nReturn the root mean square of signal s.\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.rmsfft",
    "page": "Util - utility functions",
    "title": "DSP.Util.rmsfft",
    "category": "function",
    "text": "rmsfft(f)\n\nReturn the root mean square of signal s given the FFT transform f = fft(s). Equivalent to rms(ifft(f)).\n\n\n\n"
},

{
    "location": "util.html#DSP.Util.meanfreq",
    "page": "Util - utility functions",
    "title": "DSP.Util.meanfreq",
    "category": "function",
    "text": "meanfreq(x, fs)\n\nCalculate the mean power frequency of x with a sampling frequency of fs, defined as:\n\nMPF = fracsum_i=1^F f_i X_i^2 sum_i=0^F X_i^2  Hz\n\nwhere F is the Nyquist frequency, and X is the power spectral density.\n\n\n\n"
},

{
    "location": "util.html#Util-utility-functions-1",
    "page": "Util - utility functions",
    "title": "Util - utility functions",
    "category": "section",
    "text": "unwrap\nunwrap!\nhilbert\nfftfreq\nrfftfreq\nnextfastfft\npow2db\namp2db\ndb2pow\ndb2amp\nrms\nrmsfft\nmeanfreq"
},

{
    "location": "index.html#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Index-1",
    "page": "Index",
    "title": "Index",
    "category": "section",
    "text": ""
},

]}